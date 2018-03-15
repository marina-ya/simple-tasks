const sumAll = require("../../tasks-done/sum-in-range");

describe("test for sumAll", () => {
  const expected = [4, 1];
  test("matches for [1, 4]", () => {
    expect(sumAll([1, 4])).toEqual(10);
  });
  test("matches for [10, 5]", () => {
    expect(sumAll([10, 5])).toEqual(45);
  });
  test("does not match", () => {
    expect(expected).toEqual(expect.arrayContaining([4]));
  });
});
