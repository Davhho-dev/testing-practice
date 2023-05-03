const caesarCipher = require("./caesarcipher");

// test("Encryption function shifting correctly", () => {
//     expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe("fghijklmnopqrstuvwxyzabcde");
// });

test("Shifting string with one word", () => {
    expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test("shifting string with two word and accounting for space", () => {
    expect(caesarCipher("hello world", 2)).toBe("jgnnq yqtnf");
});