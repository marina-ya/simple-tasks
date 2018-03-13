const dateConverter = require("../../tasks-done/date-converter");

describe("tests for date converter", () => {
    test('test to contain d', () => {
        expect(dateConverter(12345670000)).toContain('d');
    });
    test('returns correct result for 1 day', () => {
        expect(dateConverter("86400")).toEqual("1d 00h 00m 00s");
    });
    test('returns correct result for 10 minutes', () => {
        expect(dateConverter('600')).toEqual("10m 00s");
    });
    test('returns correct result for 7 days', () => {
        expect(dateConverter('604800')).toEqual("7d 00h 00m 00s");
    });
    test('returns correct result for 7 days with argument as number', () => {
        expect(dateConverter(604800)).toEqual("7d 00h 00m 00s");
    });
    test('returns empty string when number of seconds is null', () => {
        expect(dateConverter(null)).toEqual("");
    });
    test('returns empty string when number of seconds is false', () => {
        expect(dateConverter(false)).toEqual("");
    });
    test('returns correct result for not default parametr', () => {
        expect(dateConverter('604800', {
            days: "days",
            hours: "hours",
            minutes: "minutes",
            seconds: "seconds"
        })).toEqual("7days 00hours 00minutes 00seconds");
    });
});