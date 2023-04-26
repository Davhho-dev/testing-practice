function capitalize(str) {
    if(str === undefined) return null;
    if(typeof str !== "string") throw typeof str;
    const capStr = str.toUpperCase();
    return capStr.charAt(0);
}


module.exports = capitalize;