const analyzeArray = require("./analyzeArray")["analyzeArray"]
const NanError = require("./analyzeArray")["NanError"]

describe("Input testing", () => {
    test("No input", () => {
        expect(() => analyzeArray()).toThrow("Invalid input value; must be an array of numbers")
    })

    test("Input not list", () => {
        expect(() => analyzeArray({})).toThrow("Invalid input value; must be an array of numbers")
    })

    test("Empty list", () => {
        expect(() => analyzeArray([]).toThrow("Invalid input value; must be an array of numbers"))
    })

    test("Non number inside argument", () => {
        expect(() => analyzeArray([1, 4, "word", 2])).toThrow(NanError)
    })
})

describe("Value testing", () => {
    test("Happy path 2", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
    })

    test("Happy path 2", () => {
        expect(analyzeArray([45, 36, 16, 2, 5, 1, 8, 3, 10, 12])).toEqual({average: 13.8, min: 1, max: 45, length: 10})
    })
})

