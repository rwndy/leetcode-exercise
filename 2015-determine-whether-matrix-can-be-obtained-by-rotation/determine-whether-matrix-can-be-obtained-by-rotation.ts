/*
1. masalahnya adalah mencari kesamaan dengan target jika mat di rotasi 90 derajat
2. rotasi element array sampai ketemu dengan target
3. rotasi element 90 derajat -> kalau targetnya sama dengan mat return true
4. kalau tidak sama tambah derajatnya ke 180. lalu kalau masih belum sama dengan target maka di rotasi lagi ke 270 sampai sama mat dengan target


*/

function findRotation(mat: number[][], target: number[][]): boolean {
    const n = mat.length

    // cek kalau dua matrix sama
    const areEqual = (matrixA, matrixB) => {
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                if (matrixA[i][j] !== matrixB[i][j]) {
                    return false
                }
            }
        }
        return true
    }

    const rotate = (matrix) => {
        // 1. Transpose matrix (swap mat[i][j] dengan mat[j][i])
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
        // 2. Reverse tiap baris
        for (let i = 0; i < n; i++) {
            matrix[i].reverse()
        }
    }

     // cek 4 rotasi (0, 90, 180, 270 derajat)
    for (let i = 0; i < 4; ++i) {
        if (areEqual(mat, target)) {
            return true
        }
        rotate(mat)
    }

    return false
};