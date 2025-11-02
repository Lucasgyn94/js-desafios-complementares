/*
9. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

*/

let array = ["Lucas", "Lucas", "Tampinha", "Tampinha", "Maria"];
let stringProcurada = "lucas";

let arrayRemap = array.map(a => a.toLowerCase());
let stringProcuradaEmMinusculo = stringProcurada.toLowerCase();

if (arrayRemap.includes(stringProcuradaEmMinusculo)) {
    console.log(`O nome: "${stringProcurada}" se encontra no array`);
} else {
    console.log(`O nome: ${stringProcurada} não se encontra no array`);
}