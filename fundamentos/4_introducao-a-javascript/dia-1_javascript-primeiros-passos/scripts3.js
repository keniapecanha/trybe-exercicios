// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez ='Peão';

switch(pecaXadrez.toLowerCase()){
    case 'rei':
    case 'rainha':
        console.log(pecaXadrez, '-> verticalemnte, horizontalmente e diagonalmente');
        break
    case 'bispo':
        console.log(pecaXadrez, '-> diagonalmente');
        break
    case 'torre':
        console.log(pecaXadrez, '-> horizontalmente e verticalemente');
        break
    case 'cavalo':
        console.log(pecaXadrez, '-> duas casas horizontalemnte ou verticalmente e uma casa a mais em ângulo reto');
        break
    case 'peão':
        console.log(pecaXadrez, '-> uma casa para frente. Exceto no inicio do jogo: 2 casas para frente')
        break    
    default:
        console.log('Peça inválida');
}