function analyzeArray(arr) {
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
    result = result / arr.length;
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

console.log(analyzeArray([5, 5, 5]));

module.exports = analyzeArray;