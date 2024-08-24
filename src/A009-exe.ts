import PromptSync from "prompt-sync"

const prompt = PromptSync()

const nPrestacao: number = 5

const preco: number = parseFloat(prompt('Digite o preço do produto: '))

const valorPrestacaoSemJuros = (preco:number, prestacao: number): number =>
    preco / prestacao

console.log(`Valor total do produto ${preco}, ` + 
    `numero de prestações ${nPrestacao}X`)

console.log('Valor das prestações: ' + valorPrestacaoSemJuros(preco, nPrestacao).toFixed(2))