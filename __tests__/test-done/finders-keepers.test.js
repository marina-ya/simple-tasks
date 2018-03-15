const findElement = require("../../tasks-done/finders-keepers");

describe("tests for Finders Keepers", () => {
  test("test to be equal 8", () => {
    expect(
      findElement([1, 3, 5, 8, 9, 10], function(num) {
        return num % 2 === 0;
      })
    ).toEqual(8);
  });
  test("test to be equal underfine", () => {
    expect(
      findElement([1, 3, 5, 9], function(num) {
        return num % 2 === 0;
      })
    ).toEqual(undefined);
  });
});
