import PromptSync from "prompt-sync";

const prompt = PromptSync()

const n1 = parseInt(prompt('Digite o 1° numero: '))
const n2 = parseInt(prompt('Digite o 2° numero: '))

if( n1 <= n2){
    console.log('Menor número: ' + n1)
}else{
    console.log('Menor número: ' + n2)
}
