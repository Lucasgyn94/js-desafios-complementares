/*
Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
*/

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];
let soma = 0;
let produto = 1;

for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 === 0) {
        soma += arrayNumeros[i];
        pares.push(arrayNumeros[i]);
    } else {
        produto *= arrayNumeros[i];
        impares.push(arrayNumeros[i]);
    }
}

console.log(`Array de números:`);
console.log(`${arrayNumeros}`);


console.log(`Array Pares:`);
console.log(`${pares}`);


console.log(`Array Impares:`);
console.log(`${impares}`);


console.log(`\nSoma dos pares:`);
console.log(`${soma}`);

console.log(`\nMultiplicação dos ímpares:`);
console.log(`${produto}`);


