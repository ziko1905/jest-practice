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
        expect(() => add(1, 2, 3)).toThrow(Calculator.ArgOverflow)
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
        expect(() => subtract(1, 2, 3)).toThrow(Calculator.ArgOverflow)
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

describe("Divide", () => {
    const divide = Calculator.divide
    test("Divide two numbers(one is  multiple of another)", () =>
        expect(divide(10, 2)).toBe(5)
    )
    test("Divide two numbers", () => 
        expect(divide(10, 4)).toBeCloseTo(2.5)
    )
    test("Divide three numbers", () => 
        expect(() => divide(10, 4, 2)).toThrow(Calculator.ArgOverflow)
    )
    test("Divide the 0 with number", () =>
        expect(divide(0, 4)).toBe(0)
    )
    test("Divide the 0 with number", () =>
        expect(divide(0, 4)).toBe(0)
    )
    test("Divide number with 0", () => 
        expect(() => divide(4, 0)).toThrow(Calculator.MathError)
    )
    test("Divide 0 with numbers", () => 
        expect(() => divide(0, 4, 7)).toThrow(Calculator.ArgOverflow)
    )
    test("Divide numbers with 0", () => 
        expect(() => divide(10, 4, 2)).toThrow(Calculator.ArgOverflow)
    )
    test("Divide by constants", () => 
        expect(divide(Math.E, 2)).toBeCloseTo(Math.E / 2)
    )
})

describe("Multiply", () => {
    const multiply = Calculator.multiply
    test("No arguments provided", () => {
        expect(() => multiply()).toThrow(Calculator.ArgUnderFlow)
    })
    test("One argument provided", () => {
        expect(() => multiply(1)).toThrow(Calculator.ArgUnderFlow)
    })
    test("Multiply two numbers", () => {
        expect(multiply(2, 2)).toBe(4)
    })
    test("Multiply two numbers in strings", () => {
        expect(multiply("2", "2")).toBe(4)
    })
    test("More than two args specified", () => {
        expect(() => multiply(1, 45, "word")).toThrow(Calculator.ArgOverflow)
    })
    test("Not a number passed", () => {
        expect(() => multiply("word", 2)).toThrow(Calculator.NanError)
    })
    test("Not a number passed(as second arg)", () => {
        expect(() => multiply(2, "word")).toThrow(Calculator.NanError)
    })
    test("Multiply by 0", () => {
        expect(multiply(0, 10)).toBe(0)
    })
    test("Multiply by falsy", () => {
        expect(() => multiply(false, 1)).toThrow(Calculator.NanError)
    })
})