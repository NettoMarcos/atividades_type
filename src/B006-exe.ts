import PromptSync from "prompt-sync";

const prompt = PromptSync()
let op: number  = 0

const n1 = parseInt(prompt('Digite o 1° numero: '))
const n2 = parseInt(prompt('Digite o 2° numero: '))


const calculaMediaNumeros = (n1: number, n2: number): void => {
    let temp = (n1 + n2) / 2

    console.log('A media dos valores é = ' + temp)
}

const diferecaMaiorParaMenor = (n1: number, n2: number): void =>{
    let temp
    if(n1 >= n2){
        temp = n1 - n2

        console.log('O primeiro valor é maior que o segundo')
        console.log( 'A diferença dos numeoros é de: ' + temp)
    }else{
        temp = n2 - n1

        console.log('O segundo valor é maior que o primeiro')
        console.log( 'A diferença dos numeoros é de: ' + temp)
    }
}

const produtoDosNumeros = (n1: number, n2: number): void =>{
    let temp: number = n1 * n2

    console.log(`O produto de ${n1} e ${n2} é ${temp}` )
}

console.log('##########################')
console.log('Escolha uma Operação')
console.log('##########################')

console.log('[1] Média entre os números digitados')
console.log('[2] Diferença do maior pelo menor')
console.log('[3] Produto entre os Números')

op = parseInt(prompt("Opção: "))

switch(op){
    case 1:
        calculaMediaNumeros(n1, n2)
        break
    case 2:
        diferecaMaiorParaMenor(n1, n2)
        break
    case 3:
        produtoDosNumeros(n1, n2)
        break
    default:
        console.log('Opção invalida.')
        break
}
