class Calculator {
    static NanError = Error("Syntax Error: a non number included")
    
    static add () {
        const res = [...arguments].reduce((prev, curr) => {
            if (isNaN(curr)) throw Calculator.NanError
            return prev + curr
        })
        
        return res
    }
    
    static subtract () {
        const res = [...arguments].reduce((prev, curr) => {
            if (isNaN(curr)) throw Calculator.NanError
            return prev - curr
        })
        
        return res
    }
}

module.exports = Calculator