function longestPalindrome(s: string): string {
   let n = s.length
   let dp = Array(n).fill(null).map(() => Array(n).fill(false))
   let maxLen = 1
   let start = 0

   for (let i = 0; i < n; ++i) {
        dp[i][i] = true
   } 

   for (let len = 2; len <= n; ++len) {
        for (let i = 0; i <= n - len; ++i) {
            let j = i + len - 1

            if (s[i] === s[j]) {
                if (len === 2 || dp[i+1][j-1]) { 
                    dp[i][j] = true

                     if (len > maxLen) {
                        maxLen = len
                        start = i
                    }
                }
            }
            
        }
    }

   

   return n === 0 ? "" : s.substring(start, start + maxLen)
};