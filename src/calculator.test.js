const calculator = require("./calculator");

const calc = calculator();

test("Adding two numbers", () => {
    expect(calc.add(10, 20)).toBe(30);
});