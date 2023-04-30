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

test("Reversing strings with multiple words", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("Reversing number strings", () => {
    expect(reverseString("123")).toBe("321");
});

test("Reversing string that contains numbers", () => {
    expect(reverseString("h3ll0 W0r1d")).toBe("d1r0W 0ll3h");
});