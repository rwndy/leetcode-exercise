function isUgly(n: number): boolean {
    let prime = [2 , 3 ,5]
    for (let p of prime) {
        while (n && n % p == 0) {
            n /= p
        }
    }

    return n == 1
};