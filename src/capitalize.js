function capitalize(str) {
    if(str === undefined) return null;
    if(typeof str !== "string") throw typeof str;
    let capChar = str.charAt(0).toUpperCase();
    let remainderStr = str.slice(1);
    return capChar.concat(remainderStr);
}


module.exports = capitalize;