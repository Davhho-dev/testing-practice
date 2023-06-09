const calculator = (x, y) => {
    let sum = null;
    
    const notValidArg = (x, y) => {
        if(typeof x !== "number" || typeof y !== "number") return true;
        else return false;
    }
    
    const add = (x, y) => {
        if(notValidArg(x, y)) return "Arguments contain a non number";
            sum = x + y;
            return sum;
    }

    const subtract = (x, y) => {
        if(notValidArg(x, y)) return "Arguments contain a non number";
        sum = x - y;
        return sum;
    }

    const multiply = (x, y) => {
        if(notValidArg(x, y)) return "Arguments contain a non number";
        sum = x * y;
        return sum;
    }

    const divide = (x, y) => {
        if(notValidArg(x, y)) return "Arguments contain a non number";
        sum = x / y;
        return sum;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    };
}

module.exports = calculator;