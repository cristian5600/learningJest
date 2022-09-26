// const sum = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

const capitalize = require("./capitalize");

test("works in the general case", () => {
  expect(capitalize(`word`)).toBe(`Word`);
});
test("works with empty string", () => {
  expect(capitalize(``)).toBe(``);
});
test("works with big chars", () => {
  expect(capitalize(`Word`)).toBe(`Word`);
});
