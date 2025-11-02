/*
7. Crie um array e utilize a função includes para verificar se um elemento específico está presente

*/

let arrayDeNomes = ["Lucas", "Tampinha", "João"];
let arrayDeNomesMinusculo = arrayDeNomes.map(a => a.toLowerCase());

console.log(arrayDeNomesMinusculo);

let nomeBuscado = "Lucas";

if (arrayDeNomesMinusculo.includes(nomeBuscado.toLowerCase())) {
    console.log("O nome passado se encontra no array!");
} else {
    console.log("O nome passado não se encontra no array!");
}