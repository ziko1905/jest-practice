const reverseString = require("./reverseString")

test("Reverse small string", () => {
    expect(reverseString("abc")).toBe("cba")
})

test("reverse another small string", () => {
    expect(reverseString("abce")).toBe("ecba")
})

test("reverse yet another small string", () => {
    expect(reverseString("abced")).toBe("decba")
})

test("include numbers", () => {
    expect(reverseString("ab5ced")).toBe("dec5ba")
})

test("include uppercase", () => {
    expect(reverseString("LoaL")).toBe("LaoL")
})

