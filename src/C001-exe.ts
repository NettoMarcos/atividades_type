const matriz: number [][] = [
    [1,2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15,16],
    [3,5,7,8,9,1,2,3],
    [9,2,3,4,17,7,9,9],
    [1,2,3,4,5,8,7,8],
    [9,10,11,14,13,14,15,16],
    [3,5,7,8,9,4,2,3]
]

for (let i = 0; i < 7; i++){
    let temp = 0
    for (let j = 0; j < 8; j++){
        temp += matriz[i][j]
    }
    console.log(`Soma dos indices da linha ${i + 1} = ${temp}`)
}