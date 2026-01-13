

function isMatch(s: string, p: string): boolean {
    const sl = s.length
    const pl = p.length

    const dp: boolean[][] = Array(sl + 1)
        .fill(null)
        .map(() => Array(pl + 1).fill(false))

    dp[0][0] = true

    for (let j = 1; j <= pl; ++j) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]
        }
    }

    for (let i = 1; i <= sl; ++i) {
        for (let j = 1; j <= pl; ++j) {
            if (p[j-1] === '*') {
                dp[i][j] = dp[i][j-1] || dp[i-1][j]
            } else if (p[j-1] === '?') {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = (s[i-1] === p[j-1] && dp[i-1][j-1])
            }
        }
    }

    console.log('output =>', dp[sl][pl])

    return dp[sl][pl]
};