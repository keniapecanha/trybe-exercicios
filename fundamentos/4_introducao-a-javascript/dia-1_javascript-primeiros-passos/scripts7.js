// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 1000;
let valorLiquido;
let salariobase;
let inss;
let ir;

if (salarioBruto <= 1556.94){
    inss = salarioBruto - salarioBruto * 0.08;
    salariobase = salarioBruto - inss;
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ){
    inss = salarioBruto - salarioBruto * 0.09;
    salariobase = salarioBruto - inss;
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto - salarioBruto * 0.11;
    salariobase = salarioBruto - inss;
}else {
    inss = 570.88;
    salariobase = salarioBruto - inss;
}

if (salarioBruto <= 1903.38){
    ir = 0;
}else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
    ir = salarioBruto - salarioBruto * 0.075 - 142.80;     
}else if (salarioBruto <= 2826.66 && salarioBruto >= 3751.05){
    ir = salarioBruto - salarioBruto * 0.15 - 354.80;    
}else if (salarioBruto <= 3751.06 && salarioBruto >= 4664.68){
    ir = salarioBruto - salarioBruto * 0.225 - 636.13;    
}else {
    ir = salarioBruto - salarioBruto * 0.275 - 869.36; 
}

    
   