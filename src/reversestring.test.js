const reverseString = require("./reversestring");

test("Pass 'Hello' returns 'olleh'", () => {
    expect(reverseString("Hello")).toBe("olleH");
});