export function add(input: string): number {
    if (input === '') {
        return 0;
    }

    input.split(',').map(str => {
        if (isNaN(Number(str))) {
            throw new Error(`Invalid input: Not a number`);
        }
    });
}
