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
     * @type {number} Number of players
     * @readonly
     */
    get playersCount() {
        return this.data["clients"];
    }

    /***
     * Get the players list
     * @type {Array<FivePlayer>} List of players
     * @readonly
     */
    get players() {
        return this.data["players"];
    }

    /***
     * Get game type
     * @type {string} Game type
     * @readonly
     */
    get gameType() {
        return this.data["gametype"];
    }

    /***
     * Get the server's hostname
     * @type {string} Server's hostname
     * @readonly
     */
    get hostname() {
        return this.data["hostname"];
    }

    /***
     * Get the server's current map
     * @type {string} Server's current map
     * @readonly
     */
    get mapName() {
        return this.data["mapname"];
    }

    /***
     * Get the server's max players
     * @type {number} Server's max players
     * @readonly
     */
    get maxPlayers() {
        return this.data["sv_maxclients"];
    }

    /***
     * Is the server enhanced host support
     * @type {boolean} True if server has enhanced host support
     * @readonly
     */
    get enhancedHostSupport() {
        return this.data["enhancedHostSupport"];
    }

    /***
     * Get the server's list of active resources
     * @type {Array<String>} List of active resources
     * @readonly
     */
    get resources() {
        return this.data["resources"]
    }

    /***
     * Get the server's FXServer version
     * @type {String} FXServer version
     * @readonly
     */
    get serverVersion() {
        return this.data["server"]
    }

    /***
     * Get the server's public variables
     * @type {Object} Public variables
     * @readonly
     */
    get publicVariables() {
        return this.data["vars"]
    }

    /***
     * Get the server's players count from the last server report
     * @type {number} Server's players count
     * @readonly
     */
    get playersCountFromServerReport() {
        return this.data["selfReportedClients"];
    }

    /***
     * Get the server's owner id
     * @type {number} Server's owner id
     * @readonly
     */
    get ownerId() {
        return this.data["ownerID"];
    }

    /***
     * Get is the server is password protected
     * @type {boolean} True if server is password protected
     * @readonly
     */
    get private() {
        return this.data["private"];
    }

    /***
     * Get is the server fallbabk
     * @type {boolean} True if server is fallback
     * @readonly
     */
    get fallback() {
        return this.data["fallback"]
    }

    /***
     * Get the server's connect endpoints
     * @type {Array<String>} Server's connect endpoints
     * @readonly
     */
    get connectedEndpoints() {
        return this.data["connectEndPoints"];
    }

    /***
     * Get the server's upvote power
     * @type {number} Server's upvote power
     * @readonly
     */
    get upvotePower() {
        return this.data["upvotePower"];
    }

    /***
     * Get the server's burst power
     * @type {number} Server's burst power
     * @readonly
     */
    get burstPower() {
        return this.data["burstPower"];
    }

    /***
     * Get is the server supported
     * @type {string} "supported" if server is supported
     * @readonly
     */
    get supported() {
        return this.data["support_status"]
    }

    /***
     * Get the server's owner name
     * @type {string} Server's owner name
     * @readonly
     */
    get ownerName() {
        return this.data["ownerName"];
    }

    /***
     * Get the server's owner cfx profile url
     * @type {string} Server's owner cfx profile url
     * @readonly
     */
    get ownerProfileUrl() {
        return this.data["ownerProfile"];
    }

    /***
     * Get the server's owner avatar url
     * @type {string} Server's owner avatar url
     * @readonly
     */
    get ownerAvatarUrl() {
        return this.data["ownerAvatar"];
    }

    /***
     * Get the server's last seen date
     * @type {string} Server's last seen date
     * @readonly
     */
    get lastSeenDate() {
        return this.data["lastSeen"];
    }

    /***
     * Get the server's icon version
     * @type {number} Server's icon version
     * @readonly
     */
    get iconVersion() {
        return this.data["iconVersion"];
    }
}


module.exports = FiveServer;
