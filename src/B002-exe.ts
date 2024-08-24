import PromptSync from "prompt-sync"

const prompt = PromptSync()

let n1: number = parseFloat(prompt('1° Nota: '))
let n2: number = parseFloat(prompt('2° Nota: '))

n1 = n1 > 10 ? 10 : n1
n2 = n2 > 10 ? 10 : n2

const calculaMediaNotas = (n1: number, n2: number): number =>
    (n1 + n2) / 2 

const media = calculaMediaNotas(n1,n2)

console.log('Media: ' + media)

if (media < 4){
    console.log('Reprovado')
}else if (media < 7){
    console.log('Exame')
}else{
    console.log('Aprovado')
}