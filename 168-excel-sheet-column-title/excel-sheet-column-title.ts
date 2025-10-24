function convertToTitle(columnNumber: number): string {
//     const store = {}
//     const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//     let count = 1

//    for (let i = 0; i < abjad.length; i++) {
//     const col = abjad[i]
//     store[col] = count++;
//   }

//     for (let i = 0; i < abjad.length; i++) {
//     for (let j = 0; j < abjad.length; j++) {
//       const col = (abjad[i] + abjad[j])
//       store[col] = count++
//     }
//   }

//   const reversObject = Object.fromEntries(
//     Object.entries(store).map(([key, value]) => [value, key])
// )

// return reversObject[columnNumber]

let result = ''
const ASCII_CODE = 65
const PANJANG_ABJAD = 26
  while (columnNumber > 0) {
    columnNumber--
    result = String.fromCharCode((columnNumber % PANJANG_ABJAD) + ASCII_CODE) + result
    columnNumber = Math.floor(columnNumber / PANJANG_ABJAD)
  }

  return result;

};

/*
 jika abjad urut a-z itu ada 26
 polanya pasti akan sepereti aa-zz
 dan pengulangannya sama 27x
 maka 26x27 itu adalah 702

pertama buat patternnya dulu, baru pas masukin angka cocokin sama patternnya yg di buat object
{A: 1 - ZZ: 702}
terus di cari column number itu adanya di object mana?
return deh keysnya
*/

/*
solusi di atas salah anjeng haha
ternyata harus base 26 ges


*/