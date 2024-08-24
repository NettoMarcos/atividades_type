import PromptSync from "prompt-sync";

const promp = PromptSync()

let deposito = 0

deposito = parseFloat(promp('Digite o valor do deposito: '))

const rendimentoJuroMensal = (deposito: number): number =>
    deposito += deposito * 0.007

console.log('Rendimento: ' + rendimentoJuroMensal(deposito))
