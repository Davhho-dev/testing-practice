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

test("Passing string argument with symbols 'he!!o world' should return 'He!!o world'", () => {
    expect(capitalize("he!!0 world")).toBe("He!!0 world");
})

test("Passing all capitalized string 'HELLO WORLD' should return 'Hello world'", () => {
    expect(capitalize("HELLO WORLD")).toBe("Hello world");
})