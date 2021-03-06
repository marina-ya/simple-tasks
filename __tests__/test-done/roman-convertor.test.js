const convertToRoman = require("../../tasks-done/roman-convertor");

describe("test for convertToRoman", () => {
  const expected = [4, 1];
  // GLOBAL SCOPE
  test("matches for 12", () => {
    expect(convertToRoman(12)).toEqual("XII");
  });
  test("matches for 1", () => {
    expect(convertToRoman(1)).toEqual("I");
  });
});
