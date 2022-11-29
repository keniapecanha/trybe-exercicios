let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('    Exercícios       ');
console.log('------------------');
console.log('Ex-1:');
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let value of numbers){
    console.log(value);
}
console.log('------------------');
console.log('Ex-2:');
// Some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let value of numbers){
    sum += value;
} 
console.log(sum);
console.log('------------------');
console.log('Ex-2:');
// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let average;
average = sum / numbers.length;
console.log(average);
console.log(sum);
console.log('------------------');
console.log('Ex-3:');
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (average > 20){
    console.log('valor maior que 20');
}else{
    console.log('valor menor que 20'); 
}
console.log('------------------');
console.log('Ex-4:');
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let larger = numbers[0];
for (let item = 0; item <= numbers.length; item +=1){
    if (numbers[item] > larger){
        larger = numbers[item];
    }    
} 
console.log(larger);  
console.log('------------------');
console.log('Ex-5:');
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let odd = 0;
for (let item = 0; item <= numbers.length; item +=1){
    if (numbers[item]%2 == 1){
        odd += 1;
    }    
} 
if (odd >= 1){
    console.log(odd);
}else {
    console.log('nenhum valor ímpar encontrado');
}
console.log(larger);  
console.log('------------------');
console.log('Ex-6:');
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smaller = numbers[0];
for (let item = 0; item <= numbers.length; item +=1){
    if (numbers[item] < smaller){
        smaller = numbers[item];
    }    
} 
console.log(smaller);  
console.log('------------------');
console.log('Ex-7:');
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers25 = [];
for (let index = 25; index > 0; index -=1){
    numbers25.unshift(index);
}
console.log(numbers25);
console.log('------------------');
console.log('Ex-8:');
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let division;
for (let index = 0; index <= numbers25.length; index +=1){
    division = numbers25[index] / 2;
    console.log(division);
}