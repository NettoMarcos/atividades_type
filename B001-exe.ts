import PromptSync from "prompt-sync";
const prompt = PromptSync()

let n1 = parseFloat(prompt('1° Nota: '))
let n2 = parseFloat(prompt('2° Nota: '))
let n3 = parseFloat(prompt('3° Nota: '))
let n4 = parseFloat(prompt('4° Nota: '))

n1 = n1 > 10 ? 10 : n1
n2 = n2 > 10 ? 10 : n2
n3 = n3 > 10 ? 10 : n3
n4 = n4 > 10 ? 10 : n4


const calculaMediaNotas = (n1: number, n2: number, n3: number, n4: number): number =>
    (n1 + n2 + n3 + n4) / 4

const media = calculaMediaNotas(n1,n2,n3,n4)

console.log('Media do aluno é de: ' + media)

if (media >= 8){
    console.log('Aprovado!')
}else{
    console.log('Reprovado.')
}