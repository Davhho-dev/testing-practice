const capitalize = require("./capitalize");

test("Pass 'hello' should return 'Hello'", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("Return null if no argument is passed", () => {
    expect(capitalize()).toBeNull();
});

test("Throw error if a string argument is not passed", () => {
    expect(() => {
        capitalize(1);
    }).toThrow();
});

test("Passing multiworded string 'hello world' should return 'Hello world'", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});