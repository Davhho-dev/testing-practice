function reverseString(str) {
    if(str === undefined) return null;
    let result = "";
    for(let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}

module.exports = reverseString;