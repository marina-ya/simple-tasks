const dropElements = require("../../tasks-done/drop-it");

describe("tests for Drop it", () => {
  test("matches", () => {
    expect(dropElements([1, 2, 3, 4], n => n >= 3)).toEqual([3, 4]);
  });
});
