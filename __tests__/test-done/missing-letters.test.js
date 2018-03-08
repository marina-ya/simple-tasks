const fearNotLetter = require("../../tasks-done/missing-letters");

describe("test for fearNotLetter", () => {
    test('matches', () => {
        expect(fearNotLetter("abce")).toEqual("d");
    });
    test('matches', () => {
        expect(fearNotLetter("abcdefghjklmno")).toEqual("i");
    });
    test('undefined', () => {
        expect(fearNotLetter("bcd")).toBeUndefined();
    });   
});