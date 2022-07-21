const axios = require('axios');
const CfxEndpoints = require('../enum/Endpoints');
const AxiosConfig = require('../constant/AxiosConfig');
const CitizenServer = require('../model/CitizenServer');

class CitizenServerModule {
  static self = null;

  static get() {
    if (this.self === null) {
      this.self = new CitizenServerModule();
    }
    return this.self;
  }

  async retrieve(id) {
    try {
      const response = await axios.get(CfxEndpoints.CFX_MASTERLIST + id, AxiosConfig);
      if (response.status !== 200) {
        new Error('Server not found or internal error occurred');
      }
      return new CitizenServer(response.data);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
}

module.exports = CitizenServerModule;
