/** *
 * Class representing an Atlassian StatusPage component
 * @class
 * @constructor
 * @public
 */
class StatusComponent {
  /** *
   * Constructor for class
   * @param {Object} data data from API
   */
  constructor(data) {
    /* eslint-disable */
    const {
      id,
      name,
      status,
      created_at,
      updated_at,
      position,
      description,
      showcase,
      start_date,
      group_id,
      page_id,
      group,
      only_show_if_degraded
    } = data;
    /* eslint-enable */

    /** *
     * component id
     * @type {string}
     * @public
     * @readonly
     */
    this.id = id;

    /** *
     * component name
     * @type {string}
     * @public
     * @readonly
     */
    this.name = name;

    /** *
     * component status
     * @type {string}
     * @public
     * @readonly
     */
    this.status = status;

    /* eslint-disable */
    /** *
     * component date of creation
     * @type {string}
     * @public
     * @readonly
     */
    this.createdAt = created_at;

    /** *
     * component date of last update
     * @type {string}
     * @public
     * @readonly
     */
    this.updatedAt = updated_at;

    /** *
     * component position
     * @type {number}
     * @public
     * @readonly
     */
    this.position = position;

    /** *
     * component description
     * @type {string}
     * @public
     * @readonly
     */
    this.description = description;

    /** *
     * component showcase
     * @type {boolean}
     * @public
     * @readonly
     */
    this.showcase = showcase;

    /** *
     * component start date
     * @type {string}
     * @public
     * @readonly
     */
    this.startDate = start_date;

    /** *
     * component group id
     * @type {string}
     * @public
     * @readonly
     */
    this.groupId = group_id;

    /** *
     * component page id
     * @type {string}
     * @public
     * @readonly
     */
    this.pageId = page_id;

    /** *
     * component group
     * @type {string}
     * @public
     * @readonly
     */
    this.group = group;

    /** *
     * component only show if degraded
     * @type {boolean}
     * @public
     * @readonly
     */
    this.onlyShowIfDegraded = only_show_if_degraded;
    /* eslint-enable */
  }
}

module.exports = StatusComponent;
