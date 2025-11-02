/**
 8. Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

 */
const verificaElementoPresenteNoArray = (array, elemento) => {
    let arrayRemap = array.map(a => a.toLowerCase());
    let elementoEmMinusculo = elemento.toLowerCase();
    if (arrayRemap.includes(elementoEmMinusculo)) {
        console.log(`O elemento: ${elemento}, está presente no array!`);
    } else {
        console.log(`O elemento: ${elemento}, não está presente no array!`);
    }
}


let array = ["Lucas", "Lucas", "Tampinha", "Tampinha", "Maria"];
let elemento = "Lsucas";

verificaElementoPresenteNoArray(array, elemento);