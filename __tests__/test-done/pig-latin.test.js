const translatePigLatin = require("../../tasks-done/pig-latin");

describe("test for translatePigLatin", () => {
    test('matches', () => {
        expect(translatePigLatin("california")).toEqual("aliforniacay");
    });
    test('matches', () => {
        expect(translatePigLatin("paragraphs")).toEqual("aragraphspay");
    });
    test('matches', () => {
        expect(translatePigLatin("glove")).toEqual("oveglay");
    });
    test('matches', () => {
        expect(translatePigLatin("algorithm")).toEqual("algorithmway");
    });
   
});