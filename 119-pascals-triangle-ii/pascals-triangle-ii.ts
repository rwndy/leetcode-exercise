function getRow(rowIndex: number): number[] {
    const row = new Array<number>(rowIndex + 1).fill(1)

    for (let k = 2; k <= rowIndex; k++) {
        for (let i = k - 1; i >= 1; i--) {
        row[i] += row[i - 1]
        }
    }

    return row
};