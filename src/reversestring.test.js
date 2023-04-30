const reverseString = require("./reversestring");

test("Pass 'Hello' returns 'olleh'", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("Passing no arguments should return null", () => {
    expect(reverseString()).toBeNull();
});

test("Passing nonstring throws error", () => {
    expect(() => {
        reverseString(123);
    }).toThrow();
});