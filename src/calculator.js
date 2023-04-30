const calculator = (x, y) => {
    let sum = null;
    const add = (x, y) => {
        sum = x + y;
        console.log(sum);
        return sum;
    }
    return {add};
}

module.exports = calculator;