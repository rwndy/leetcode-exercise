function reverseVowels(s: string): string {
    const vowels = new Set('aiueoAIUEO')
    const chrs = s.split('')
    const reversWords = chrs.filter(ch => vowels.has(ch)).reverse()

    let i = 0
    const newString = chrs.map(ch => vowels.has(ch) ? reversWords[i++] : ch)

    return newString.join('')
};

/*
pertama split karakter stringnya, lalu buat variable huruf vokal aiueo looping terus cocokin apakah ada huruf vokal di dalam string tersebut kalau ada saya reverse terus masukan kedalam variable newString.

*/