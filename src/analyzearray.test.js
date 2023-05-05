const analyzeArray = require("./analyzearray");

// test("Test average function", () => {
//     expect(analyzeArray([5, 5, 5])).toBe(5);
// });

test("Test function to return an object with average key", () => {
    expect(analyzeArray([5, 5, 5])).toEqual(
        expect.objectContaining({
            average: 5,
            min: 5,
            max: 5,
            length: 3
        })
    );
});