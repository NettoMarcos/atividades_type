import PromptSync from "prompt-sync";

const prompt = PromptSync()
let opRegiao: number
let opMetragem: number

enum Regiao{
    "Mirasol",
    "Multirao",
    "Laranjeiras",
    "Amazonas",
    "Nova Suiça"
}
enum Metragem{
    "100m" = 0,
    "150m" = 1,
    "200m" = 2,
    "250m" = 3,
    "300m" = 4
}

const precos: number [][] = [
    [10000,20000,35000,40000,50000],
    [11000,22000,33000,44000,55000],
    [20000,30000,40000,50000,60500],
    [40000,52220,63330,70000,89000],
    [60000,70000,89000,97000,100000]
]

const printarTodaMatriz = (): void =>{
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            console.log(`${Regiao[i]}, ${Metragem[j]}: ${precos[i][j]}R$`)
        }
    }
}
const printarMenorValorMetragem = (metro: number): void =>{
    let temp: number = 0
    let regiaoI: number = 0
    

    for(let i = 0; i < 5; i++){
        if(precos[i][metro] < temp || temp === 0){
            temp = precos[i][metro]
            regiaoI = i
        }
    }
    console.log(`${Regiao[regiaoI]}, ${Metragem[metro]} = ${temp}R$`)
}

const printarApartementoEspecifico = (opRegiao: number, opMetragem: number): void =>{
    console.log(`${Regiao[opRegiao]} ${Metragem[opMetragem]} = ${precos[opRegiao][opMetragem]}`)
}

console.log('############################')
console.log('Escolha uma operação')
console.log('############################')
console.log('[1] ver todos os valores')
console.log('[2] Ver o preço do apartamento mais barato de acordo com a metragem')
console.log('[3] Ver o preço da metragem em um bairro')
console.log('[4] Media dos preços por metragem')
const op: number = parseInt(prompt('Opção: '))

switch(op){
    case 1:
        printarTodaMatriz()
        break
    case 2:
        console.log('############################')
        console.log('Escolha uma metragem')
        console.log('############################')
        console.log('[1] 100m²')
        console.log('[2] 150m²')
        console.log('[3] 200m²')
        console.log('[4] 250m²')
        console.log('[5] 300m²')
        opMetragem = parseInt(prompt('Opção: '))

        printarMenorValorMetragem(opMetragem)
        
        break
    case 3:
        console.log('############################')
        console.log('Escolha uma região')
        console.log('############################')
        console.log('[1] Mirasol')
        console.log('[2] Multirão')
        console.log('[3] Laranjeiras')
        console.log('[4] Amazonas')
        console.log('[5] Nova Suiça')
        opRegiao = parseInt(prompt('Região: '))
        console.log('############################')
        console.log('Escolha uma metragem')
        console.log('############################')
        console.log('[1] 100m²')
        console.log('[2] 150m²')
        console.log('[3] 200m²')
        console.log('[4] 250m²')
        console.log('[5] 300m²')
        opMetragem = parseInt(prompt('Opção: '))
        console.log()
        printarApartementoEspecifico(opRegiao, opMetragem)
        break
}
