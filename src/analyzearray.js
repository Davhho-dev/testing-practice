function analyzeArray(arr) {
    if(arr === undefined) return undefined;
    if(arr.length === 0) return "Empty Array";
    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: arr.length
    }
}

function average(arr) {
    let result = null;
    arr.forEach(index => {
        result += index;
    });
    result = Math.round((result / arr.length) * 100) / 100;
    console.log(result);
    return result;
}

function min(arr) {
    let minResult = arr[0];
    arr.forEach(index => {
        if(index < minResult) minResult = index;
    });
    return minResult;
}

function max(arr) {
    let maxResult = arr[0];
    arr.forEach(index => {
        if(index > maxResult) maxResult = index;
    });
    return maxResult;
}

module.exports = analyzeArray;