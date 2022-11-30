// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let num = 10;
let values = [];
let fator = 1;
for (let index = num; index > 0; index-=1){
    values.push(index);
}    
 for (let index2 = 0; index2 < values.length; index2+=1){
    fator = fator * values[index2];         
}
console.log(fator);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let wordBackward;
for (let index = word.length; index >= 0; index-=1){
    wordBackward =  word[index];
    console.log(wordBackward);
} 

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
