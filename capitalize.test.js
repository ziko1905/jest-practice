const capitalize = require("./capitalize")

// Testing 
describe("", () => {
    it("Is recognized", () => {
        expect(typeof capitalize).toBe("function")
    })
})

const testcases = ["foo", "test", "TEST", "tEST"];
const answ = ["Foo", "Test", "TEST", "TEST"];

testcases.forEach((val, inx) => {
    test(`First letter capitalized(${val})`, () =>
        expect(capitalize(val)).toBe(answ[inx]))
    
});

