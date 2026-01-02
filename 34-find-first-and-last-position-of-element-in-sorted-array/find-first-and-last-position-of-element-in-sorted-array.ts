function searchRange(nums: number[], target: number): number[] {

    function findFirst(low: number, high: number): number {
        if (low > high) return -1
        
        const mid = Math.floor((low + high) / 2)
        
        if (nums[mid] === target) {
            
            if (mid === 0 || nums[mid - 1] !== target) {
                return mid
            } else {
                return findFirst(low, mid - 1)
            }
        } else if (nums[mid] < target) {
            return findFirst(mid + 1, high)
        } else {
            return findFirst(low, mid - 1)
        }
    }

    function findLast(low: number, high: number): number {
        if (low > high) return -1
    
        const mid = Math.floor((low + high) / 2)
        
        if (nums[mid] === target) {
         
            if (mid === nums.length - 1 || nums[mid + 1] !== target) {
                return mid
            } else {
                return findLast(mid + 1, high)
            }
        } else if (nums[mid] < target) {
            return findLast(mid + 1, high)
        } else {
            return findLast(low, mid - 1)
        }
    }

    const first = findFirst(0, nums.length - 1)
    
    if (first === -1) {
        return [-1, -1]
    }
    
    const last = findLast(0, nums.length - 1)
    
    return [first, last]
};