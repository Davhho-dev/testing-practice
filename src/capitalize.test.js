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

test("Passing string argument with symbols/numbers 'he!!0 world' should return 'He!!0 world'", () => {
    expect(capitalize("he!!0 world")).toBe("He!!0 world");
});

test("Passing all capitalized string 'HELLO WORLD' should return 'Hello world'", () => {
    expect(capitalize("HELLO WORLD")).toBe("Hello world");
});

test("Passing string with first char already capitalize 'Hello' should return 'Hello'", () => {
    expect(capitalize("Hello")).toBe("Hello");
});

test("@#$ should be No valid characters", () => {
    expect(capitalize("@#$")).toBe("No valid characters");
});

test("123 should be No valid characters", () => {
    expect(capitalize("123")).toBe("No valid characters");
});