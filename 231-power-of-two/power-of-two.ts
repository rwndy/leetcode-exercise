function isPowerOfTwo(n: number): boolean {
     return n > 0 && (n & (n - 1)) === 0 && (n - 1) % 1 === 0
};