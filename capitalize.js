function capitalize (word) {
    const first = word.charAt(0).toLocaleUpperCase()
    return `${first}${word.slice(1)}`
}
module.exports = capitalize