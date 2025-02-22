export function add(input: string): number {
    if (input === '') {
        return 0;
    }

    let delimiter = /[\n,]/; // Default delimiters: comma `,` and newline `\n`

    // Check for multi-character custom delimiter format: "//[***]\n1***2***3"
    const multiDelimiterMatch = input.match(/^\/\/(\[.+\])\n(.*)$/);
    if (multiDelimiterMatch) {
        const delimiterString = multiDelimiterMatch[1]; // Extract "[***]"
        const delimiters = delimiterString.match(/\[([^\]]+)\]/g)?.map(d => d.slice(1, -1)) || [];
        // Escape special characters and construct regex
        const escapedDelimiters = delimiters.map(d => escapeRegExp(d)).join('|');
        delimiter = new RegExp(`(?:${escapedDelimiters}|\n|,)`); // Non-capturing group
        input = multiDelimiterMatch[2]; // Remove delimiter declaration
    } else {
        // Check for simple custom delimiter "//;\n1;2"
        const simpleDelimiterMatch = input.match(/^\/\/(.+)\n(.*)$/);
        if (simpleDelimiterMatch) {
            delimiter = new RegExp(`[${escapeRegExp(simpleDelimiterMatch[1])}\\n,]`);
            input = simpleDelimiterMatch[2];
        }
    }

    // Check for invalid trailing delimiters
    if (/[,|\n]$/.test(input)) {
        throw new Error("Invalid input: Trailing delimiter found");
    }

    // Split input using delimiters
    const splitValues = input.split(delimiter);

    // Check for missing numbers between delimiters
    if (splitValues.some(val => val.trim() === "")) {
        throw new Error("Invalid input: Missing number between delimiters");
    }

    // Convert to numbers
    const numbers = splitValues.map(str => {
        if (isNaN(Number(str))) {
            throw new Error(`Invalid input: Not a number`);
        }
        return Number(str);
    });

    // Handle negative numbers
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    // Ignore numbers greater than 1000
    return numbers.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

// Helper function to escape regex special characters
function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}