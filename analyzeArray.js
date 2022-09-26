function analyze(array) {
  let object = {
    average: 0,
    sum: 0,
    min: Infinity,
    max: -Infinity,
    length: 0,
  };
  array.forEach((element) => {
    object.sum += element;
    object.length++;
    if (element < object.min) object.min = element;
    if (element > object.max) object.max = element;
  });
  object.average = object.sum / object.length;
  return object;
}
module.exports = analyze;
/*const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};*/
