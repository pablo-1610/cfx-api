/***
 * Class representing a FiveM server
 * @class
 * @constructor
 * @public
 */
class FiveServer {
    /***
     * Constructor for class
     * @param payload {Object} Data from API
     */
    constructor(payload) {
        const {EndPoint, Data} = payload;

        /***
         * id represents the server's cfx id
         * @type {string}
         * @public
         */
        this.id = EndPoint;

        /***
         * data represents the server data from the response body of the API
         * @type {Object}
         * @public
         */
        this.data = Data;
    }

    /***
     * Get the number of connected players
     * @return {number} Number of players
     */
    getPlayersCount() {
        return this.data["clients"];
    }

    /***
     * Get the players list
     * @return {Array<FivePlayer>} List of players
     */
    getPlayers() {
        return this.data["players"];
    }

    /***
     * Get game type
     * @return {string} Game type
     */
    getGameType() {
        return this.data["gametype"];
    }

    /***
     * Get the server's hostname
     * @return {string} Server's hostname
     */
    getHostName() {
        return this.data["hostname"];
    }

    /***
     * Get the server's current map
     * @return {string} Server's current map
     */
    getMapName() {
        return this.data["mapname"];
    }

    /***
     * Get the server's max players
     * @return {number} Server's max players
     */
    getMaxPlayers() {
        return this.data["sv_maxclients"];
    }

    /***
     * Is the server enhanced host support
     * @return {boolean} True if server has enhanced host support
     */
    isEnhancedHostSupport() {
        return this.data["enhancedHostSupport"];
    }

    /***
     * Get the server's list of active resources
     * @return {Array<String>} List of active resources
     */
    getResources() {
        return this.data["resources"]
    }

    /***
     * Get the server's FXServer version
     * @return {String} FXServer version
     */
    getServerVersion() {
        return this.data["server"]
    }

    /***
     * Get the server's public variables
     * @return {Object} Public variables
     */
    getPublicVariables() {
        return this.data["vars"]
    }

    /***
     * Get the server's players count from the last server report
     * @return {number} Server's players count
     */
    getPlayersCountFromServerReport() {
        return this.data["selfReportedClients"];
    }

    /***
     * Get the server's owner id
     * @return {number} Server's owner id
     */
    getOwnerId() {
        return this.data["ownerID"];
    }

    /***
     * Get is the server is password protected
     * @return {boolean} True if server is password protected
     */
    isPrivate() {
        return this.data["private"];
    }

    /***
     * Get is the server fallbabk
     * @return {boolean} True if server is fallback
     */
    isFallback() {
        return this.data["fallback"]
    }

    /***
     * Get the server's connect endpoints
     * @return {Array<String>} Server's connect endpoints
     */
    getConnectedEndpoints() {
        return this.data["connectEndPoints"];
    }

    /***
     * Get the server's upvote power
     * @return {number} Server's upvote power
     */
    getUpvotePower() {
        return this.data["upvotePower"];
    }

    /***
     * Get the server's burst power
     * @return {number} Server's burst power
     */
    getBurstPower() {
        return this.data["burstPower"];
    }

    /***
     * Get is the server supported
     * @return {string} "supported" if server is supported
     */
    isSupported() {
        return this.data["support_status"]
    }

    /***
     * Get the server's owner name
     * @returns {string} Server's owner name
     */
    getOwnerName() {
        return this.data["ownerName"];
    }

    /***
     * Get the server's owner cfx profile url
     * @returns {string} Server's owner cfx profile url
     */
    getOwnerProfileUrl() {
        return this.data["ownerProfile"];
    }

    /***
     * Get the server's owner avatar url
     * @returns {string} Server's owner avatar url
     */
    getOwnerAvatarUrl() {
        return this.data["ownerAvatar"];
    }

    /***
     * Get the server's last seen date
     * @returns {string} Server's last seen date
     */
    getLastSeenDate() {
        return this.data["lastSeen"];
    }

    /***
     * Get the server's icon version
     * @returns {number} Server's icon version
     */
    getIconVersion() {
        return this.data["iconVersion"];
    }
}


module.exports = FiveServer;
