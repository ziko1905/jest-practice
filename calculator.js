class Calculator {
    static NanError = Error("Syntax Error: a non number included")
    static ArgOverflow = Error("Syntax Error: more than two numbers were provided")
    static MathError = Error("Math Error: division with zero")
    static ArgUnderFlow = Error("Syntax Error: not enough arguments specified")
    static add (firstNum, secondNum) {
        if (arguments.length > 2) throw Calculator.ArgOverflow
        else if (isNaN(firstNum) || isNaN(secondNum)) throw Calculator.NanError
        
        return +firstNum + +secondNum
    }

    static subtract (firstNum, secondNum) {
        if (arguments.length > 2) throw Calculator.ArgOverflow
        if (isNaN(firstNum) || isNaN(secondNum)) throw Calculator.NanError
        
        return +firstNum - +secondNum
    }

    static divide (divisor, dividends) {
        if (arguments.length > 2) throw Calculator.ArgOverflow 
        else if (+divisor === 0) return 0 

        return [...arguments].reduce((prev, curr) => {
            if (isNaN(curr)) throw Calculator.NanError
            if (!curr) throw Calculator.MathError

            return prev / curr
        })
    }   

    static multiply (firstNum, secondNum) {
        if (arguments.length < 2)throw Calculator.ArgUnderFlow
        else if (arguments.length > 2) throw Calculator.ArgOverflow
        else if (isNaN(firstNum) || isNaN(secondNum)) throw Calculator.NanError
        else if (!["string", "number"].includes(typeof firstNum) || !["string", "number"].includes(typeof firstNum)) throw Calculator.NanError
        return firstNum * secondNum
    }
}

module.exports = Calculator