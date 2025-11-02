function addDigits(num: number): number {
    return num < 10 ? num : (num - 1) % 9 + 1;
};
