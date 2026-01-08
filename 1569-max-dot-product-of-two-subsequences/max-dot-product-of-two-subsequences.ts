function maxDotProduct(nums1: number[], nums2: number[]): number {
    const dp: number[][] = Array(nums1.length + 1)
        .fill(0)
        .map(() => Array(nums2.length + 1).fill(-Infinity));

    for (let i = 1; i <= nums1.length; ++i) {

        for(let j =1; j <= nums2.length; ++j ) {
            const product = nums1[i - 1] * nums2[j - 1]

            console.log(`product-${i}-${j}`, product)
            dp[i][j] = product

            if (dp[i - 1][j - 1] !== -Infinity) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + product);
            }
            
            if (dp[i - 1][j] !== -Infinity) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
            }
            
            if (dp[i][j - 1] !== -Infinity) {
                dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
            }
        }
    }


    return dp[nums1.length][nums2.length]
};