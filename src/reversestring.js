function reverseString(str) {
    if(str === undefined) return null;
    if(typeof str !== "string") throw typeof str;
    let result = "";
    for(let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    console.log(result);
    return result;
}

module.exports = reverseString;