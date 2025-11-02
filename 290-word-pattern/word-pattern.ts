function wordPattern(pattern: string, s: string): boolean {
     const words = s.split(' ')
  if (pattern.length !== words.length) return false

  const p2w = new Map()
  const w2p = new Map()

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i]
    const w = words[i]

    if (p2w.has(p) && p2w.get(p) !== w) return false
    if (w2p.has(w) && w2p.get(w) !== p) return false

    p2w.set(p, w)
    w2p.set(w, p)
  }

  return true
};

/*
kita set pattern
lalu split si S parameter
terus mencocokan pattern dengan split s




*/