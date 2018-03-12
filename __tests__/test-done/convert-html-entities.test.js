const convertHTML = require("../../tasks-done/сonvert-html-entities.js");

describe("test for convertHTML", () => {
    test('matches', () => {
        expect(convertHTML("Dolce & Gabbana")).toEqual("Dolce &​amp; Gabbana");
    });
    test('matches', () => {
        expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &​lt; Pizza &​lt; Tacos");
    });
    test('matches', () => {
        expect(convertHTML("<>")).toEqual("&​lt;&​gt;");
    });

});