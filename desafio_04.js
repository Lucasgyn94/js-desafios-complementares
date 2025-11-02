/*
4. Crie uma função que determine se um ano é bissexto

*/

const verificadorAnoBissexto = (ano) => {
    if (ano % 400 == 0) {
        console.log(`O ano ${ano} é bissexto!`);
    } else if ((ano % 4 == 0) && (ano % 100 != 0)) {
        console.log(`O ano ${ano} é bissexto!`);
    } else {
        console.log(`O ano ${ano} não é bissexto!`);
    }
}

verificadorAnoBissexto(2024);