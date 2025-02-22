import { add } from "../src/stringCalculator";

test("Returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("Throws an error if the input is not a number", () => {
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

test("Throws an error if just a new line is passed without a number", () => {
    expect(() => add("2,\n")).toThrow("Invalid input: Trailing delimiter found");
});

test("Supports custom delimiters specified in the format '//[delimiter]\\n[numbers]'", () => {
    expect(add("//;\n1;2")).toBe(3); // Custom delimiter is ";"
    expect(add("//|\n1|2|3")).toBe(6); // Custom delimiter is "|"
});

test("Throws an error if a negative number is passed", () => {
    expect(() => add("-1")).toThrow("Negatives not allowed: -1");
});

test("Throws an error if multiple negative numbers are passed", () => {
    expect(() => add("-1,-2,-3")).toThrow("Negatives not allowed: -1, -2, -3");
});

test('Should ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,5")).toBe(1005);
    expect(add("1002,1003,1004")).toBe(0);
});

test('Should support custom delimiters of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[###]\n4###5###6")).toBe(15);
    expect(add("//[***]\n7***8***9***10")).toBe(34);
});

