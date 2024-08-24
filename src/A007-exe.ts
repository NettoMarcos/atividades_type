import promptSync from "prompt-sync";

const prompt = promptSync()

const cotacaoDolar: number = parseFloat(prompt('Digite o valor da cotação do Dolar em Real: '))
const quantidadeDolar: number = parseFloat(prompt("Quantidade de dolares disponivel com o usuario: "))

const convertDolarToReal = (cotacaoDolar: number, quantidadeDolar: number): number => cotacaoDolar * quantidadeDolar

console.log(`Cotação do Dolar em Real = ${cotacaoDolar.toFixed(2)}R$`)
console.log(`${quantidadeDolar.toFixed(2)}$ = ${convertDolarToReal(cotacaoDolar, quantidadeDolar).toFixed(2)}R$`)