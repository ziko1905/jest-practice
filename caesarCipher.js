function caesarCipher (message, key) {
    function convert (char) {
        const code = char.charCodeAt()
        if (code > 96 && code < 123) return String.fromCharCode(97 + (code + key) % 123 % 97)
        else if (code > 64 && code < 91) return String.fromCharCode(65 + (code + key) % 91 % 65)
        return char
    }
    if (arguments.length < 2)throw new Error("Argument or arguments missing('message', 'cipher key')")
    else if (typeof message !== "string") throw new Error("First Argument not a string")
    else if (isNaN(key)) throw new Error("Second Argument not a number")
    
    return message.split("").reduce((prev, curr) => prev + convert(curr), "")
}



module.exports = caesarCipher