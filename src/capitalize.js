function capitalize(str) {
    if(str === undefined) return null;
    console.log(str);
    const capStr = str.toUpperCase();
    return capStr.charAt(0);
}

module.exports = capitalize;