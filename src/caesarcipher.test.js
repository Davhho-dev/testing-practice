const caesarCipher = require("./caesarcipher");

test("Encryption function shifting correctly", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe("fghijklmnopqrstuvwxyzabcde");
});