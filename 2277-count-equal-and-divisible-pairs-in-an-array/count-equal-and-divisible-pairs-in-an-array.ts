/*
masalahnya di element array ini adakah element yg sama?


*/

function countPairs(nums: number[], k: number): number {
    const valueIndices: Map<number, number[]> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!valueIndices.has(num)) {
            valueIndices.set(num, []);
        }
        valueIndices.get(num)!.push(i);
    }
    
    let count = 0;
    
    for (const indices of valueIndices.values()) {

        const remainderCount: Map<number, number> = new Map();
        
        for (let i = 0; i < indices.length; i++) {
            const rem_i = indices[i] % k;
            for (let j = 0; j < k; j++) {
                if ((rem_i * j) % k === 0) {
                    count += remainderCount.get(j) || 0;
                }
            }
            remainderCount.set(rem_i, (remainderCount.get(rem_i) || 0) + 1);
        }
    }
    
    return count;
};