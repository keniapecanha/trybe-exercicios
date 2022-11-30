// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
console.log('Exercício 1');
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

console.log('Exercício 2');
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let wordBackward;
for (let index = word.length-1; index >= 0; index-=1){
    wordBackward =  word[index];
    console.log(wordBackward);
} 
console.log('Exercício 3');
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let larger = array[0];
let smaller = array[0];

for (let index = 0; index < array.length; index+=1){
    if (larger.length < array[index].length){
        larger = array[index];
    }
    if (smaller.length > array[index].length){
        smaller = array[index];
    } 
}       
console.log(larger);
console.log(smaller);    
console.log('Exercício 4');
// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let primeNumbers = 0;
for (let index = 2; index <=50; index+=1){
    let isPrime = true; 
    for (let index2 = 2; index2 < index; index2 +=1){
        if (index%index2 === 0){
            isPrime = false;
        }
    }  
    if (isPrime){
        primeNumbers = index;

    }   
}  
console.log(primeNumbers);
