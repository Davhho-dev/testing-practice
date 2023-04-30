const calculator = (x, y) => {
    let sum = null;
    
    const notValidArg = (x, y) => {
        if(typeof x !== "number" || typeof y !== "number") return true;
        else return false;
    }
    
    const add = (x, y) => {
        if(notValidArg(x, y)) return "Arguments contain a non number";
        else {
            sum = x + y;
            console.log(sum);
            return sum;
        }
    }
    return {add};
}

module.exports = calculator;