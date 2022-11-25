// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
const num1 = 10;
const num2 = 20;
const num3 = 30;
const somaAngulos180 = true;

if (num1 > num2){
    console.log(num1, 'é maior do que', num2);
}else {
    console.log(num2, 'é maior do que', num1);
}

console.log('---------------------------')

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
if (num1 > num2 && num1 > num3){
    console.log(num1, 'é maior do que', num2, 'e', num3);
}else if (num2 > num1 && num2 > num3){
    console.log(num2, 'é maior do que', num1, 'e', num3);
}else {
    console.log(num3, 'é maior do que', num1, 'e', num2);
} 

console.log('---------------------------')

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

if (num1 > 0){
    console.log('positive');
}else if (num1 < 0){
    console.log('negative');
}else {
    console.log('zero');
}

console.log('---------------------------')

// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

if (num1 + num2 + num3 == 180){
    console.log(somaAngulos180);
} else if(num1 < 0 || num2 < 0 || num3 < 0){
    console.log('Ângulo inválido');
}else {
    console.log(!somaAngulos180);
}

console.log('---------------------------')
