export function add(input: string): number {
    if (input === '') {
        return 0;
    }

    // Check for invalid patterns like "2,\n" or ",," or "\n,"
    if (/[,\n]$/.test(input)) {
        throw new Error("Invalid input: Trailing delimiter found");
    }

    // Split by comma (`,`) or newline (`\n`)
    const numbers = input.split(/[\n,]/).map(str => {
        if (isNaN(Number(str)) || str.trim() === "") {
            throw new Error(`Invalid input: Not a number`);
        }
        return Number(str);
    });

    return numbers.reduce((sum, num) => sum + num, 0);
}
