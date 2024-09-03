function reverseString(word) {
    let newString = [];
    word = word.split("");
    while (word.length) newString += word.pop()
    return newString;
}

module.exports = reverseString