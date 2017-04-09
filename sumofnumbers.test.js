/* eslint-env mocha, chai */
/* global sumFor, sumWhile, sumRecursion, sumTheSimpleWay, chai */

describe('SumOfNumbers', function () {
  const testNums = [1, 2, 3, 4];
  describe('sumFor()', function () {
    it('should return 10 for testnums', function () {
      chai.expect(sumFor(testNums)).to.equal(10);
    });
  });
  describe('sumWhile()', function () {
    it('should return 10 for testnums', function () {
      chai.expect(sumWhile(testNums)).to.equal(10);
    });
  });
  describe('sumRecursion()', function () {
    it('should return 10 for testnums', function () {
      chai.expect(sumRecursion(testNums)).to.equal(10);
    });
  });
  describe('sumTheSimpleWay()', function () {
    it('should return 10 for testnums', function () {
      chai.expect(sumTheSimpleWay(testNums)).to.equal(10);
    });
  });
});
