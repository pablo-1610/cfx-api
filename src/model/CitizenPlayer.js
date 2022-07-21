/** *
 * Class representing a CitizenFX player
 * @class
 * @constructor
 * @public
 */
class CitizenPlayer {
  /** *
   * Constructor for class
   * @param {Object} payload Data from API
   */
  constructor(payload) {
    const {endpoint, id, identifiers, name, ping} = payload;

    /** *
     * endpoint represents the player's ip address from the server
     * @type {string}
     * @public
     */
    this.endpoint = endpoint;

    /** *
     * id represents the player's id from the server
     * @type {number}
     * @public
     */
    this.id = id;

    /** *
     * identifiers represents all the ways the player can be identified
     * @type {Array<string>}
     * @public
     */
    this.identifiers = identifiers;

    /** *
     * name represents the player's name from the server
     * @type {string}
     * @public
     */
    this.name = name;

    /** *
     * ping represents the player's ping from the server
     * @type {number}
     * @public
     */
    this.ping = ping;
  }
}

module.exports = CitizenPlayer;
