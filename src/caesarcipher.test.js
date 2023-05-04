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

test("shifting all caps string argument returns correct lowercase shifted result", () => {
    expect(caesarCipher("HELLO world", 10)).toBe("rovvy gybvn");
});

test("shifting string with intergers", () => {
    expect(caesarCipher("h3ll0 wor1d", 7)).toBe("o3ss0 dvy1k");
});