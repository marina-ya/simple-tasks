const steamrollArray = require("../../tasks-done/steamroller");

describe("test for steamrollArray", () => {
  test("return correct result", () => {
    expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
  });
  test("return correct result ", () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });
  test("return correct result for array with empty array", () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
  });
  test("return correct result  for array with object", () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});
