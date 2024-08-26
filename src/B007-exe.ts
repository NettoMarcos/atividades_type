import PromptSync from "prompt-sync";

const prompt = PromptSync()

const salario: number = parseFloat(prompt('Digite o salario do funcionário: '))

const reajusteSalario = (salario: number): number =>
    salario += salario * 0.3


if (salario <= 500){
    console.log('Salário reajustado: ' + salario)
}
else{
    console.log('Funcionario não tem direito a reajuste salárial.')
}


