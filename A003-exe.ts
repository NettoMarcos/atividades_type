const nome: string = 'Jorge'
const salario: number = 1800.00
const totalVendasMes: number = 2599.99
const comissao: number = 0.15

const salarioTotalMes = (salario: number, totalVendas: number, 
    comissao: number): number => salario + (totalVendas * comissao)


console.log(`Salário fixo de ${nome} é de ${salario}. Nesse mês recebera um total de
     ${salarioTotalMes(salario,totalVendasMes,comissao).toFixed(2)} com as comissões`)


