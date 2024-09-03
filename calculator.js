class Calculator {
    static NanError = Error("Syntax Error: a non number included")
    static MathError = Error("Math Error: division with zero")
    static add () {
        const res = [...arguments].reduce((prev, curr) => {
            if (isNaN(curr)) throw Calculator.NanError
            return +prev + +curr
        })
        
        return res
    }

    static subtract () {
        const res = [...arguments].reduce((prev, curr) => {
            if (isNaN(curr)) throw Calculator.NanError
            return +prev - +curr
        })
        
        return res
    }

    static divide (divisor, dividends) {
        if (+divisor === 0) return 0 

        return [...arguments].reduce((prev, curr) => {
            if (isNaN(curr)) throw Calculator.NanError
            if (!curr) throw Calculator.MathError

            return prev / curr
        })
    }   
}

module.exports = Calculator