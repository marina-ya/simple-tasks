const sumFibs = require("../../tasks-done/sum-odd-fibonacci-numbers");

describe("test for Sum All Odd Fibonacci Numbers", () => {
  test("return correct result for 1", () => {
    expect(sumFibs(1)).toEqual(2);
  });
  test("return correct result for 1000", () => {
    expect(sumFibs(1000)).toEqual(1785);
  });
  test("return correct result for 4000000", () => {
    expect(sumFibs(4000000)).toEqual(4613732);
  });
  test("return correct result for 4", () => {
    expect(sumFibs(4)).toEqual(5);
  });
});
