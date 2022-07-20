const axios = require('axios');
const endpoint = "https://servers-frontend.fivem.net/api/servers/single/"

export default {
    retrieveServerFive: (id) => {
        return axios.get(endpoint + id)
    },

    testNb: () => {
        return 5;
    }
}
