function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1

    while (left < right) {
        const sum = numbers[left] + numbers[right] // 2 + 15, 7 + 11, 2+7,
        
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else if (sum > target) {
            right--
        }
    }
};