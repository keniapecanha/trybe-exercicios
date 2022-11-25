const currentHou = 11;
let message;

if (currentHou >= 22){
    message = 'Não deveríamos comer nada, é hora de dormir';
}else if (currentHou >= 18){
    message = 'Rango da noite, vamos jantar 😀';
}else if (currentHou >= 14){
    message = 'Vamos fazer um bolo pro café da tarde?';
}else if (currentHou >= 11 && currentHou < 14){
    message = 'Hmmm, cheiro de café recém-passado';
}

console.log(message);
