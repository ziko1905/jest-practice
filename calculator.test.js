const Calculator = require("./calculator")

describe("Add", () => {
    const add = Calculator.add
    test("Add two numbers", () => 
        expect(add(1, 2)).toBe(3)
    )
    test("Add two negative numbers", () => 
        expect(add(-1, -2)).toBe(-3)
    )
    test("Add two floating point numbers", () => 
        expect(add(-0.1, -2)).toBeCloseTo(-2.1)
    )
    test("Add three numbers", () => {
        expect(add(1, 2, 3)).toBe(6)
    })
    test("Add two string numbers", () => 
        expect(add("1", "2123")).toBe(2124)
    )
    test("Add two negative string numbers", () => 
        expect(add("-11", "2123")).toBe(2112)
    )
    test("Add a number and a word", () => 
        expect(() => add("1", "hello")).toThrow("A non number included"))
    
})