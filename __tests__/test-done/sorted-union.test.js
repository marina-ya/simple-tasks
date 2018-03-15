const uniteUnique = require("../../tasks-done/sorted-union");

describe("test for uniteUnique", () => {
  test("matches", () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
  });
  test("matches for [1, 3, 2], [1, [5]], [2, [4]]", () => {
    expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]]);
  });
  test("matches for [1, 2, 3], [5, 2, 1]", () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
  });
});
