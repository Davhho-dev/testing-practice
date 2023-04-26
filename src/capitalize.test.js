const capitalize = require("./capitalize");

test("lowercase string 'hello' should return first character as 'H'", () => {
    expect(capitalize("hello")).toBe("H");
});