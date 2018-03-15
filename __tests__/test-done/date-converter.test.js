const dateConverter = require("../../tasks-done/date-converter");

describe("tests for date converter", () => {
  test("test to contain d", () => {
    expect(dateConverter(12345670000)).toContain("d");
  });
  test("returns correct result for 7 days with argument as string", () => {
    expect(dateConverter("604800")).toEqual("7d 00h 00m 00s");
  });
  test("returns correct result for 7 days with argument as number", () => {
    expect(dateConverter(604800)).toEqual("7d 00h 00m 00s");
  });
  test("returns correct result for 6d 23hours 59mimutes 59seconds", () => {
    expect(dateConverter("604799")).toEqual("6d 23h 59m 59s");
  });
  test("returns correct result for 1 day", () => {
    expect(dateConverter("86400")).toEqual("1d 00h 00m 00s");
  });
  test("returns correct result for 23h 59m 59s", () => {
    expect(dateConverter("86399")).toEqual("23h 59m 59s");
  });
  test("returns correct result for 01h 00m 00s", () => {
    expect(dateConverter("3600")).toEqual("01h 00m 00s");
  });
  test("returns correct result for 59m 59s", () => {
    expect(dateConverter("3599")).toEqual("59m 59s");
  });
  test("returns correct result for 10 minutes", () => {
    expect(dateConverter("600")).toEqual("10m 00s");
  });
  test("returns correct result for 09 minutes 59seconds", () => {
    expect(dateConverter("599")).toEqual("09m 59s");
  });
  test("returns correct result for 1minutes", () => {
    expect(dateConverter("60")).toEqual("01m 00s");
  });
  test("returns correct result for 59seconds", () => {
    expect(dateConverter("59")).toEqual("00m 59s");
  });
  test("returns correct result for 1second", () => {
    expect(dateConverter("1")).toEqual("00m 01s");
  });
  test("returns correct result for 1 second", () => {
    expect(dateConverter("01")).toEqual("00m 01s");
  });
  test("returns empty string when number of seconds is null", () => {
    expect(dateConverter(null)).toEqual("");
  });
  test("returns empty string when number of seconds is false", () => {
    expect(dateConverter(false)).toEqual("");
  });
  test("returns correct result for not default parametr", () => {
    expect(
      dateConverter("604800", {
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds"
      })
    ).toEqual("7days 00hours 00minutes 00seconds");
  });
});
