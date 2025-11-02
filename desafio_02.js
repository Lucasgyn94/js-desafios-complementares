/*
2. Implemente uma função que verifique se uma pessoa é maior de idade.
*/

const verificarMaiorIdade = (idade) => {
    if (idade >= 18) {
        console.log(`Você tem ${idade} anos e é maior de idade!`);
    } else {
        console.log(`Você tem ${idade} anos e é menor de idade!`);
    }
}

verificarMaiorIdade(17);