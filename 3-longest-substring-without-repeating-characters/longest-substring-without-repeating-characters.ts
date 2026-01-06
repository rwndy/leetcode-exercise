function lengthOfLongestSubstring(s: string): number {
    let start = 0
    let end = 0
    let map = new Map()

    for (let i = 0; i < s.length; ++i) {
        const char = s[i]

         if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1
        }

         map.set(char, i)

         const currentLength = i - start + 1

         end = Math.max(end, currentLength)
    }

    return end
};