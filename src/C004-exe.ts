export const matriz: number[][] = [
    [3, 5, 1, 7, 9, 2, 6, 8],
    [4, 9, 8, 1, 3, 7, 5, 2],
    [2, 6, 9, 4, 5, 8, 7, 3],
    [7, 1, 3, 9, 6, 4, 8, 5],
    [8, 2, 5, 6, 7, 1, 4, 9],
    [9, 7, 4, 3, 2, 5, 1, 6],
    [5, 3, 7, 8, 1, 6, 9, 4],
    [6, 8, 2, 5, 4, 9, 3, 7]
]
const quantidadeImpares = (matriz: number[][]): number =>{
    let contador = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if (matriz[i][j] % 2 !== 0){
                contador++
            }
        }
    }
    return contador
}

const quantidadePares = (matriz: number[][]): number =>{
    let contador = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if (matriz[i][j] % 2 === 0){
                contador++
            }
        }
    }
    return contador!
}

const encontrarMenor = (matriz:number[][]): number =>{
    let menor = matriz[0][0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            const valorAtual = matriz[i][j]
            if (valorAtual < menor) {
                menor = valorAtual
            }
        }
    }

    return menor
}

const encontrarMaior = (matriz:number[][]): number =>{
    let maior = matriz[0][0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            const valorAtual = matriz[i][j]
            if (valorAtual > maior) {
                maior = valorAtual
            }
        }
    }

    return maior
}

let somaMatriz: number = 0

for(let i = 0; i < matriz.length; i++){
    somaMatriz += matriz[i].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
}

console.table(matriz)

console.log('Soma dos Valores: ' + somaMatriz)
console.log()


console.log("Diagonal principal: ")
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i][i])
}

console.log()
console.log('Diagonal secundária: ')
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i][matriz.length - 1 - i])
}

console.log("Troca elementos da linha 2 com os da coluna 4:")

for(let i = 0; i < matriz.length; i++){
    let temp = matriz[1][i]

    matriz[1][i] = matriz[i][3]
    matriz[i][3] = temp
}


console.table(matriz)

console.log("Troca a diagonal primaria com a diagonal secundária:")

for(let i = 0; i < matriz.length; i++){
    let temp = matriz[i][i]

    matriz[i][i] = matriz[i][matriz.length - 1 - i]
    matriz[i][matriz.length - 1 - i] = temp
}

console.table(matriz)

console.log('Quantidade de Impares: ' + quantidadeImpares(matriz))
console.log()
console.log('Quantidade de Pares: ' + quantidadePares(matriz))
console.log()
console.log('Quantidade de numeros divisíveis por 2: ' + quantidadePares(matriz))


console.log(`Menor valor: ${encontrarMenor(matriz)}`)
console.log(`Maior valor: ${encontrarMaior(matriz)}`)
