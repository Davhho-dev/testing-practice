function reverseString(str) {
    let result = "";
    for(let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    // console.log(result);
    return result;
}

module.exports = reverseString;