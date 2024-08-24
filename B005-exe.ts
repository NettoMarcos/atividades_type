import PromptSync from "prompt-sync";

const prompt = PromptSync()

const n1 = parseInt(prompt('Digite o 1° numero: '))
const n2 = parseInt(prompt('Digite o 2° numero: '))

const calculaMediaNumeros = (n1: number, n2: number): number => 
(n1 + n2) / 2