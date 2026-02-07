function findTheDifference(s: string, t: string): string {
   const hash = {}

   for (const c of s) {
    hash[c] = (hash[c] || 0) + 1
  }

  for (const c of t) {
    if (!hash[c]) {
      return c
    }
    
    hash[c]--
  }
};