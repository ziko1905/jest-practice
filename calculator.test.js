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
        expect(() => add("1", "hello")).toThrow(Calculator.NanError))  
})

describe("Subtract", () => {
    const subtract = Calculator.subtract
    test("Subtract two numbers", () => 
        expect(subtract(1, 2)).toBe(-1)
    )
    test("Subtract two negative numbers", () => 
        expect(subtract(-1, -2)).toBe(1)
    )
    test("Subtract two floating point numbers", () => 
        expect(subtract(-0.1, -2)).toBeCloseTo(1.9)
    )
    test("Subtract three numbers", () => {
        expect(subtract(1, 2, 3)).toBe(-4)
    })
    test("Subtract two string numbers", () => 
        expect(subtract("1", "2123")).toBe(-2122)
    )
    test("Subtract two negative string numbers", () => 
        expect(subtract("-11", "2123")).toBe(-2134)
    )
    test("Subtract a number and a word", () => 
        expect(() => subtract("1", "hello")).toThrow(Calculator.NanError))
    
})