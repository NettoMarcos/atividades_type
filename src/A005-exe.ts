let A: number = 10
let B: number = 20

console.log(`A = ${A}`)
console.log(`B = ${B}`)

const temp: number = A

A = B
B = temp

console.log('##############')
console.log('Valores trocados: ')
console.log(`A = ${A}`)
console.log(`B = ${B}`)
