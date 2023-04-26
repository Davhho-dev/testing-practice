const capitalize = require("./capitalize");

test("lowercase string 'hello' should return first character as 'H'", () => {
    expect(capitalize("hello")).toBe("H");
});

test("Return null if no argument is passed", () => {
    expect(capitalize()).toBeNull();
});

test("Throw error if a string argument is not passed", () => {
    expect(() => {
        capitalize(1);
    }).toThrow();
});