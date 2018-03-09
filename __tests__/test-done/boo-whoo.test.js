const booWho = require("../../tasks-done/boo-who");

describe("test for booWho", () => {
    test('matches', () => {
        expect(booWho(true)).toEqual(true);
        expect(booWho(NaN)).toEqual(false);
        expect(booWho("true")).toEqual(false);
    });
});