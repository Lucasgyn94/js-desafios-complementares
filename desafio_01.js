/*
1. Crie uma função que valide se um número é positivo, negativo ou zero.
*/
const validadorNumero = (numero) => {
    if (numero < 0) {
        console.log(`${numero} é negativo`);
    } else if (numero === 0) {
        console.log(`${numero} é zero`);
    } else {
        console.log(`${numero} é positivo`);
    }
}

numero = 2;
validadorNumero(numero)