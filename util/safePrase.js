/**
 * Safe parse json
 * @param {string} string
 * @returns {Object|string}
 */
module.exports = (string) => {
    try {
        return JSON.parse(string)
    } catch (err) {
        return string
    }
}
