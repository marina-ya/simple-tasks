const booWho = require("../../tasks-done/boo-who");

describe("test for booWho", () => {
  test("matches", () => {
    expect(booWho(true)).toBeTruthy();
    expect(booWho(NaN)).toBeFalsy();
    expect(booWho("true")).toBeFalsy();
  });
});
