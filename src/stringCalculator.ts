export function add(input: string): number {
    if (input === '') {
        return 0;
    }

    const numbers = input.split(',').map(str => {
        if (isNaN(Number(str))) {
            throw new Error(`Invalid input: Not a number`);
        }
        return Number(str);
    });

    return numbers.reduce((sum, num) => sum + num, 0);
}