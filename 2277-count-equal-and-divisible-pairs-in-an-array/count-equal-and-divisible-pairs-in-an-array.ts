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
    
        for (let i = 0; i < indices.length; i++) {
            for (let j = i + 1; j < indices.length; j++) {
                if ((indices[i] * indices[j]) % k === 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
};