/**
 * validator : This function will be used to check keys from a container
 *             passed to a class constructor.
 * @param {String} className The class' name we're checking parameters.
 * @param {String} containerName The container's name we're checking keys.
 * @param {Object} container The actual container.
 * @param {Array<String>} expectedKeys The expected keys to be found into the container.
 */

function validator(className, containerName, container, expectedKeys) {
  if (!container) {
    throw new Error(`${className}.${containerName} is either null or undefined.`);
  }
  if (Object.keys(container) === 0) {
    throw new Error(`${className}.${containerName} is empty.`);
  }
  const keys = Object.keys(container);
  for (const expectedKey of expectedKeys) {
    if (!keys.includes(expectedKey)) {
      throw new Error(`Expected key was not found in ${className}.${containerName} : '${expectedKey}'`);
    }
  }
}

module.exports = validator;
