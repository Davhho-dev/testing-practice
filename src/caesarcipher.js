const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(str, shift) {
    console.log(alphabet.length);
    return encryptKey(shift);
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