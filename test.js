const assert = require('assert');
const diffArrays = require('./');

const ARRAYS_2_PAIR = [
  [['a', 'b', 'c'], ['b', 'c', 'd'], ['a', 'd']],
  [['x', 'x'], ['a', 'b', 'c'], ['x', 'a', 'b', 'c']],
  [['x'], ['a', 'b', 'c'], ['x', 'a', 'b', 'c']],
  [['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e'], ['b', 'c', 'y']]
];

const ARRAYS_3_PAIR = [
  [['a', 'b', 'c'], ['a', 'b', 'c', 'd'], ['c', 'e'], ['a', 'b', 'd', 'e']],
  [['x', 'x'], ['a', 'b', 'c'], ['x', 'a', 'b', 'c'], ['x', 'a', 'b', 'c']],
];

describe('diffArrays', () => {
  ARRAYS_2_PAIR.forEach((arrays) => {
    it(`${arrays[0]} and ${arrays[1]} diff in ${arrays[2]}`, () => {
      assert.deepEqual(diffArrays(arrays[0], arrays[1]), arrays[2]);
    });
  });

  ARRAYS_3_PAIR.forEach((arrays) => {
    it(`${arrays[0]}, ${arrays[1]} and ${arrays[2]} diff in ${arrays[3]}`, () => {
      assert.deepEqual(diffArrays(arrays[0], arrays[1], arrays[2]), arrays[3]);
    });
  });
});
