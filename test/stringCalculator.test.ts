import { add } from "../src/stringCalculator";

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});