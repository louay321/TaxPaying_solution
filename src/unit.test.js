const {read, findProd} = require("./units.mjs");
// test value reading
test('read values correctly from external file', () => {
    expect(read).toEqual([10, 5]);
});

// test if it can recognize products in string inputs
// Error as function is not getting correct parameter from here 
// so i call it within function scope
test('recognize a product in a string input', () => {
    expect(findProd).toBe(true)
});