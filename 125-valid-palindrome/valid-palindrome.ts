function isPalindrome(s: string): boolean {
    const cleanWord = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0
    let right = cleanWord.length - 1

    while (left < right) {
        if (cleanWord[left] !== cleanWord[right]) {
            return false
        }

        left++
        right--
    }

    return true
};