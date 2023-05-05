const analyzeArray = require("./analyzearray");

test("Test average function", () => {
    expect(analyzeArray([5, 5, 5])).toBe(5);
});