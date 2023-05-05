function analyzeArray(arr) {
   return average(arr);
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

module.exports = analyzeArray;