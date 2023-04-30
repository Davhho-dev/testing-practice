const calculator = require("./calculator");

const calc = calculator();

test("Adding two numbers", () => {
    expect(calc.add(10, 20)).toBe(30);
});

test("Check for non number arguments", () => {
    expect(calc.add(10, "x")).toBe("Arguments contain a non number");
    expect(calc.subtract(10, "5")).toBe("Arguments contain a non number");
    expect(calc.multiply("5", 5)).toBe("Arguments contain a non number");
    expect(calc.divide("10", 2)).toBe("Arguments contain a non number");
});

test("Subtracting two numbers", () => {
    expect(calc.subtract(20, 10)).toBe(10);
});

test("Multiplying two numbers", () => {
    expect(calc.multiply(5, 5)).toBe(25);
});

test("Dividing two numbers", () => {
    expect(calc.divide(10, 2)).toBe(5);
});

