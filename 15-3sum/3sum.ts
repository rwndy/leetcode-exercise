function threeSum(nums: number[]): number[][] {
    const sort = nums.sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < sort.length; i++) {
        if (i > 0 && (sort[i] === sort[i-1]) ) {
            continue
        }

        let left= i + 1
        let right = sort.length - 1

        while (left < right) {
            let sum = sort[i] + sort[left] + sort[right]

            if (sum === 0) {
                
                result.push([sort[i], sort[left], sort[right]])

                while (left < right && sort[left] === sort[left + 1]) left++
                while (left < right && sort[right] === sort[right - 1]) right--

                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }

    return result
};