import PromptSync from "prompt-sync";

const prompt = PromptSync()

const n1 = parseInt(prompt('Digite o 1° numero: '))
const n2 = parseInt(prompt('Digite o 2° numero: '))
const n3 = parseInt(prompt('Digite o 3° numero: '))

if( n1 <= n2 && n1 <= n3){
    console.log('Menor número: ' + n1)
}else if(n2 <= n3){
    console.log('Menor número: ' + n2)
}else{
    console.log('Menor número: ' + n3)
}