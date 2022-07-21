const axios = require('axios');
const AxiosConfig = require('../constant/AxiosConfig');
const CfxEndpoints = require('../enum/Endpoints');

/** *
 * Class representing all data from the Cfx.re status page
 * @class
 * @constructor
 * @public
 */
class CfxStatus {
  /** *
   * Constructor for class
   * @param {Object} summary summary of the Cfx.re current status
   */
  constructor(summary) {
    /** *
     * description of the Cfx.re current status
     * @type {string}
     * @public
     */
    this.description = summary.status['description'];

    /** *
     * indicator of the Cfx.re current status
     * @type {string}
     * @public
     */
    this.level = summary.status['indicator'];
  }

  /** *
   * check if all components are operational
   * @type {boolean}
   */
  get everythingOk() {
    return this.level === 'none';
  }

  /** *
   * Get all Cfx.re components status
   * @return {Promise<Array<StatusComponent>>}
   */
  async fetchComponents() {
    const response = await axios.get(CfxEndpoints.CFX_STATUS_COMPONENTS, AxiosConfig);
    if (response.status !== 200) {
      new Error('Cannot retrieve Cfx.re components status');
    }
    return response.data['components'];
  }
}

module.exports = CfxStatus;
