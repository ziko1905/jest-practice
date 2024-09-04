function analyzeArray (arr) {
    if (!arguments.length || !Array.isArray(arr)) throw new Error("Invalid input value; must be an array of numbers")
    let min = Infinity;
    let max = -Infinity;
    const sum = arr.reduce((prev, curr) => {
        if (typeof curr !== "number") throw new NanError(curr)
        min = curr < min ? curr : min;
        max = curr > max ? curr : max;
        return prev + curr
    }, 0)
    return {
        "average": sum / arr.length,
        min,
        max,
        "length": arr.length
    }
}

class NanError extends Error {
    constructor(invalidElem) {
        super(`'${invalidElem} is not a number'`)
    }
}

module.exports = { analyzeArray, NanError}
