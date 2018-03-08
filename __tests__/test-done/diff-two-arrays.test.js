const diffArrays = require("../../tasks-done/diff-two-arrays");

describe("test for diffArrays", () => {

    test("should work", () => {
        const diffedArrays = diffArrays([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
        expect(diffedArrays).toHaveLength(2);
    });
// TDD - test driven development
});