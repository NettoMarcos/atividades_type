import PromptSync from "prompt-sync"
const prompt = PromptSync()
const precoCusto: number = parseFloat(prompt('Digite o preço de custo: '))
const percentual: number = parseFloat(prompt('Digite a porcentagem de lucro desejada: '))

const calculaValorVenda = (precoCusto: number, percentual: number): number =>
   precoCusto += precoCusto * (percentual / 100)

console.log("Valor da venda: " + calculaValorVenda(precoCusto, percentual))