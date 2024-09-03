const caesarCipher = require("./caesarCipher")

test("Not enough arguments", () => {
    expect(() => caesarCipher("Argument or arguments missing('message', 'cipher key')"))
})

test("Wrong second argument", () => {
    expect(() => caesarCipher("String", "Not a number")).toThrow("Second Argument not a number")
})

test("Wrong first argument", () => {
    expect(() => caesarCipher(2, 2)).toThrow("First Argument not a string")
})

test("Happy path", () => 
    expect(caesarCipher("xyz", 3)).toBe("abc")
)

test("Uppercase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

test("Punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})