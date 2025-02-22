export function add(input: string): number {
    if (input === '') {
        return 0;
    }

    // Split by comma (`,`) or newline (`\n`)
    const numbers = input.split(/[\n,]/).map(str => {
        if (isNaN(Number(str))) {
            throw new Error(`Invalid input: Not a number`);
        }
        return Number(str);
    });

    return numbers.reduce((sum, num) => sum + num, 0);
}
