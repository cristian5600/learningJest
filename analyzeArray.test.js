const analyze = require("./analyzeArray.js");
test(`has corect type`, () => {
  expect(analyze([3, 4, 1])).toHaveProperty(
    (`average`, `min`, `max`, `length`, `sum`)
  );
});
test(`returns corectly`, () => {
  expect(analyze([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
    sum: 6,
  });
});
/*const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}; */
