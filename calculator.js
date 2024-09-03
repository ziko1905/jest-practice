class Calculator {
    static add () {
        const res = [...arguments].reduce((prev, curr) => +prev + +curr)
        console.log(res)
        if (isNaN(res)) throw Error("A non number included")
        return res
    }
}

module.exports = Calculator