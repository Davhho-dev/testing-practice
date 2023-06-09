const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(str, shift = 0) {
    if(typeof str !== "string") throw new Error("Not a String");
    if(shift < 0) throw new Error("No negative numbers");
    const lowerStr = str.toLowerCase();
    let result = "";
    let shiftedAlphabet = encryptKey(shift);
    for(let i = 0; i < lowerStr.length; i++) {
        if(nonCharacters(str.charAt(i))) result += str.charAt(i);
        let alphaIndex = alphabet.indexOf(lowerStr.charAt(i)); //locate index of each char of string argument
        result += shiftedAlphabet.charAt(alphaIndex);
    }
    return result;
}

function encryptKey(shift) {
    let encryptAlphabet = "";
    let shiftWrapIndex = (-1 * shift); //keep track of index to start when wrapping around
    for(let i = 0; i < alphabet.length; i++) {
        if((i + shift) > alphabet.length - 1) {
            encryptAlphabet += alphabet.charAt(shiftWrapIndex + shift);
            shiftWrapIndex++;
        }
        else encryptAlphabet += alphabet.charAt(i + shift);
    }
    return encryptAlphabet
}

function nonCharacters(char) {
    const nonChar = "0123456789`~!@#$%^&*()-_=+[{]};:',<.>/? ";
    if(nonChar.includes(char)) return true;
    return false;
}

module.exports = caesarCipher;