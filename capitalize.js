function capitalize (word) {
    return `${word.charAt(0).toLocaleUpperCase()}${word.slice(1)}`
}

module.exports = capitalize