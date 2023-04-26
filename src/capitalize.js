function capitalize(str) {
    if(str === undefined) return null;
    if(typeof str !== "string") throw typeof str;
    const lowerCase = str.toLowerCase()
    let capChar = lowerCase.charAt(0).toUpperCase();
    let remainderStr = lowerCase.slice(1);
    return capChar.concat(remainderStr);
}


module.exports = capitalize;