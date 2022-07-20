const axios = require('axios');
const FiveServer = require("./model/FiveServer");
const endpoint = "https://servers-frontend.fivem.net/api/servers/single/"

const axiosConfig = {
    headers: {
        'User-Agent': 'cfxre-api',
    }
}

/***
 * Retrieve a FiveM server
 * @param id {string} Server ID
 * @returns {Promise<FiveServer>}
 */
async function retrieveFive(id) {
    try {
        const response = await axios.get(endpoint + id, axiosConfig)
        if (response.status !== 200) {
            new Error("Server not found")
        }
        return new FiveServer(response.data);
    } catch (error) {
        console.log("Error: " + error)
    }
}

module.exports = {
    retrieveFive,
}
