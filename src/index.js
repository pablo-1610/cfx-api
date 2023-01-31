const CitizenServerModule = require('./modules/CitizenServer.module');
const CfxStatusModule = require('./modules/CfxStatus.module');

/**
 *
 * Retrieve a CitizenFX server
 * @param {string} id Server ID
 * @return {Promise<CitizenServer>}
 */
async function fetchServer(id) {
  return await CitizenServerModule.get().retrieve(id);
}

/**
 *
 * Retrieve Cfx.re status
 * @return {Promise<CfxStatus>}
 */
async function fetchStatus() {
  return await CfxStatusModule.get().retrieve();
}

/**
 * Retrieve all unresolved CfX.re incidents
 * @return {Promise<JSON>}
 */
async function fetchUnresolvedIncidents() {
  return await CfxStatusModule.get().retrieveUnresolvedIncidents();
}

module.exports = {
  fetchServer,
  fetchStatus,
  fetchUnresolvedIncidents,
};
