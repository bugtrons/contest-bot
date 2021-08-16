
module.exports.randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

module.exports.randomFromArray = (array) => array[Math.floor(Math.random() * array.length)]
