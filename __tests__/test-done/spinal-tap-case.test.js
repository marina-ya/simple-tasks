const spinalCase = require("../../tasks-done/spinal-tap-case");

describe("test for spinalCase", () => {
  test("return correct result for uppercased words", () => {
    expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap");
  });
  test("return correct result for camel cased words", () => {
    expect(spinalCase("thisIsSpinalTap")).toEqual("this-is-spinal-tap");
  });
  test("return correct result for underscored words", () => {
    expect(spinalCase("The_Andy_Griffith_Show")).toEqual("the-andy-griffith-show");
  });
  test("return correct result for uppercased words and hyphen words", () => {
    expect(spinalCase("Teletubbies say Eh-oh")).toEqual("teletubbies-say-eh-oh");
  });
  test("return correct result for uppercased words and hyphen words ", () => {
    expect(spinalCase("AllThe-small Things")).toEqual("all-the-small-things");
  });
});
