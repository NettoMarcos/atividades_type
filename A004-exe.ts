export const nome: string = 'Jorge'
let nota1: number = 11
let nota2: number = 9
let nota3: number = 8.5

nota1 = nota1 > 10 ? 10 : nota1
nota2 = nota2 > 10 ? 10 : nota2
nota3 = nota3 > 10 ? 10 : nota3

const mediaNotas = (n1:number, n2:number, n3:number): number => (n1 + n2 + n3) / 3 


console.log(`Media das notas de ${nome} = ${mediaNotas(nota1, nota2, nota3).toFixed(2)}`)