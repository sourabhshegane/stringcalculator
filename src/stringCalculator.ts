export function add(input: string): number {
    if (input === '') {
        return 0;
    }

    let delimiter = /[\n,]/; // Default delimiters: comma `,` and newline `\n`

    // Check for custom delimiter format: "//[delimiter]\n[numbers]"
    const customDelimiterMatch = input.match(/^\/\/(.+)\n(.*)$/);
    if (customDelimiterMatch) {
        delimiter = new RegExp(`[${customDelimiterMatch[1]}\\n,]`); // Include default delimiters too
        input = customDelimiterMatch[2]; // Remove the custom delimiter declaration
    }

    // Check for invalid cases like trailing delimiters
    if (/[,\n]$/.test(input)) {
        throw new Error("Invalid input: Trailing delimiter found");
    }

    // Split the numbers using the extracted delimiter
    const numbers = input.split(delimiter).map(str => {
        if (isNaN(Number(str)) || str.trim() === "") {
            throw new Error(`Invalid input: Not a number`);
        }
        return Number(str);
    });

    // Check for negative numbers
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
}
