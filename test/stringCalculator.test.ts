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

test("If multiple numbers are passed, their sum should be returned", () => {
    expect(add("2,3")).toBe(5);
});

test("If new line between numbers instead of commas is passed, the correct sum should be returned", () => {
    expect(add("2\n3")).toBe(5);
});
