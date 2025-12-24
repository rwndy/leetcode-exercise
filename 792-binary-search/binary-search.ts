function search(nums: number[], target: number): number {
    let low: number = 0
    let high: number = nums.length - 1

    while (low <= high) {
        const mid: number = Math.floor((low + high) / 2)
        const guess: number = nums[mid]

        if (guess === target) {
            return mid
        } else if (guess > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
};