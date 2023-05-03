const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(str, shift) {
    let result = "";
    let shiftedAlphabet = encryptKey(shift);
    for(let i = 0; i < str.length; i++) {
        let alphaIndex = alphabet.indexOf(str.charAt(i)); //locate index of each char of string argument
        result += shiftedAlphabet.charAt(alphaIndex);
    }
    console.log(result);
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
    console.log(encryptAlphabet);
    return encryptAlphabet
}

module.exports = caesarCipher;