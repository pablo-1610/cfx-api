const axios = require('axios');
const AxiosConfig = require('../constant/AxiosConfig');
const CfxEndpoints = require('../enum/Endpoints');
const CfxStatus = require('../model/CfxStatus');

class CfxStatusModule {
  static self = null;

  static get() {
    if (this.self === null) {
      this.self = new CfxStatusModule();
    }
    return this.self;
  }

  async retrieve() {
    try {
      const response = await axios.get(CfxEndpoints.CFX_STATUS_SUMMARY, AxiosConfig);
      if (response.status !== 200) {
        new Error('Error while retrieving Cfx.re status');
      }
      return new CfxStatus(response.data);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
}

module.exports = CfxStatusModule;
