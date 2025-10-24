function majorityElement(nums: number[]): number {

    const sortNumber = nums.sort()
    const groupByNums = sortNumber.reduce((acc, num) => { 
        acc[num] = (acc[num] || 0) + 1
        return acc;
    }, {})

    const maxKeys = Object.keys(groupByNums).reduce((a, b) => groupByNums[a] > groupByNums[b] ? a : b)

    return parseInt(maxKeys)
};

/*

1. kelompokin jenis mainnya
2. hitung total mainan perkategori itu
3. bandingin mana yang lebih banyak mainannya
*/