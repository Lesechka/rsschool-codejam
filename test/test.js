const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');
const make = require('./make.js');
const recursion = require('./recursion.js');

describe('The sum of other elements', () => {
    it('1', () => {
    const solutions = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
    });

    it('2', () => {
    const solutions = sumOfOther([13, 21, 32, 6, 12, 25]);
    assert.deepEqual(solutions, [96, 88, 77, 103, 97, 84]);
    });

describe('make', () => {
    const sum = (a, b) => a + b;
    const dif = (a, b) => a - b;
    it('should return sum of all arguments correctly 1', () => {
        assert.equal(make(1, 3)(6, 5, 7)(4)(sum), 26);
    });
    it('should return sum of all arguments correctly 2', () => {
        assert.equal(make(10)(25, 33)(1)(5)(101)(sum), 175);
    });
    it('should return difference between all agruments in correct order(left -> right) 1', () => {
        assert.equal(make(30, 5)(15)(4, 4, 2)(dif), 0);
    });
    it('should return difference between all agruments in correct order(left -> right) 1', () => {
        assert.equal(make(666)(111)(222, 333)(111)(dif), -111);
    });
    });

describe('recursion', () => {
        it('should return correct array containing tree values 1', () => {
          const tree = {
            value: 10,
            left: {
              value: 5,
            },
            right: {
              value: 15,
            },
          };
          assert.deepEqual(recursion(tree), [[10], [5, 15]]);
        });
        it('should return correct array containing tree values 2', () => {
          const tree = {
            value: 10,
            left: {
              value: 5,
              left: {
                value: 3,
              },
              right: {
                value: 6,
              },
            },
            right: {
              value: 15,
              left: {
                value: 13,
              },
              right: {
                value: 18,
              },
            },
          };
          assert.deepEqual(recursion(tree), [[10], [5, 15], [3, 6, 13, 18]]);
        });
        it('should return correct array containing tree values 3', () => {
          const tree = {
            value: 10,
            left: {
              value: 5,
              left: {
                value: 3,
                left: {
                  value: 1,
                },
              },
              right: {
                value: 6,
              },
            },
            right: {
              value: 15,
              left: {
                value: 13,
              },
              right: {
                value: 18,
                right: {
                  value: 20,
                },
              },
            },
          };
          assert.deepEqual(recursion(tree), [[10], [5, 15], [3, 6, 13, 18], [1, 20]]);
        });
        it('should return correct array containing tree values 4', () => {
          const tree = {
            value: 100,
            left: {
              value: 90,
              left: {
                value: 70,
              },
              right: {
                value: 99,
              },
            },
            right: {
              value: 120,
              left: {
                value: 110,
              },
              right: {
                value: 130,
              },
            },
          };
          assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
        });
      });
