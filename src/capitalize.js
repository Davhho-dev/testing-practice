function capitalize(str) {
    if(str === undefined) return null;
    if(typeof str !== "string") throw typeof str;
    if(allSpecialChar(str)) return "No valid characters";
    else {
        const lowerCase = str.toLowerCase();
        let capChar = lowerCase.charAt(0).toUpperCase();
        let remainderStr = lowerCase.slice(1);
        return capChar.concat(remainderStr);
    };
};

function allSpecialChar(str) {
    const caseCheck = /[-._!"`'#%&,:;<>=@{}~0-9\$\(\)\*\+\/\\\?\[\]\^\|]+/;
    const length = str.length;
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i).match(caseCheck)) count++;
    }
    return (count === length) ? true : false;
};

module.exports = capitalize;