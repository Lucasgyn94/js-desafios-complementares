/*
3. Desenvolva uma função que valide se uma string é vazia ou não.
*/
const verificadorString = (string) => {
    if (string == "") {
        console.log("Você passou uma string vazia!");
    } else {
        console.log(`A string passada não é vazia! \nString passada: ${string}`);
    }
}

verificadorString("Lucas");