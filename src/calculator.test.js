const calculator = require("./calculator");

const calc = calculator();

test("Adding two numbers", () => {
    expect(calc.add(10, 20)).toBe(30);
});

test("Check for non number arguments", () => {
    expect(calc.add(10, "x")).toBe("Arguments contain a non number");
});