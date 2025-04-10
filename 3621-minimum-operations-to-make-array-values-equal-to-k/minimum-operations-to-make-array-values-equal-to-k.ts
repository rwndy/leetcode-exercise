function minOperations(nums: number[], k: number): number {

    if (nums.some(num => num < k)) {
        return -1;
    }

    if (nums.every(num => num === k)) {
        return 0;
    }
    
    let operations = 0;

    let current = [...nums];
    
    while (!current.every(num => num === k)) {
        const greaterThanK = current.filter(num => num > k);
        if (greaterThanK.length > 0 && greaterThanK.every(val => val === greaterThanK[0])) {
        
            current = current.map(num => num > k ? k : num);
            operations++;
            continue;
        }
        
        let validHFound = false;
        
        const uniqueValues = [...new Set(current)].sort((a, b) => a - b);
        
        for (let i = uniqueValues.length - 1; i >= 0; i--) {
            if (uniqueValues[i] <= k) continue;
            
            for (let j = k; j < uniqueValues[i]; j++) {
           
                const greaterThanJ = current.filter(num => num > j);
         
                if (greaterThanJ.length > 0 && greaterThanJ.every(val => val === greaterThanJ[0])) {
                    current = current.map(num => num > j ? j : num);
                    operations++;
                    validHFound = true;
                    break;
                }
            }
            
            if (validHFound) break;
        }
        
        if (!validHFound) {
            return -1;
        }
    }
    
    return operations;
};