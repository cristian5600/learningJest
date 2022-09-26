// const sum = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

const reverseString = require("./reverseString");
test("Function reverses basic single word strings", () => {
  expect(reverseString(`string`)).toBe(`gnirts`);
});
