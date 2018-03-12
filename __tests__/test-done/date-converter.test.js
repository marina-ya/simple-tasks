const dateConverter = require("../../tasks-done/date-converter");

describe("test to contain d", () => {
    test('test', () => {
        expect(dateConverter(12345670000)).toContain('d');
    });
    test('test', () => {
        expect(dateConverter("86400")).toEqual("1d 00h 00m 00s");
    });
    test('test number of seconds is falsy return empty string', () => {
        expect(dateConverter("abc")).toEqual(" ");
    });
    test('test', () => {
        expect(dateConverter('600')).toEqual("10m 00s");
    });
    test('test', () => {
        expect(dateConverter('604800')).toEqual("7d 00h 00m 00s");
    });
    test('test', () => {
        expect(dateConverter('604800', {
            days: "days",
            hours: "hours",
            minutes: "minutes",
            seconds: "seconds"
        })).toEqual("7days 00hours 00minutes 00seconds");
    });

});