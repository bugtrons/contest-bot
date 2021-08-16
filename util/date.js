const { format } = require('fecha')

module.exports = ({
    humanReadableCreatedTimestamp: (timestamp, mask) => format(new Date(timestamp), mask || 'dddd MMMM Do, YYYY'),
})
