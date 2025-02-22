import { add } from "../src/stringCalculator";

test("Returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("throws an error if the input is not a number", () => {
    expect(() => add("sourabh")).toThrow("Invalid input: Not a number");
});

test("If just one number is passed, the same number should be returned", () => {
    expect(add("2")).toBe(2);
});
