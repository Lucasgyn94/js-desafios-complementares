/*
5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
*/

const calculaMedia = (n1, n2) => {
    if ((n1 <= 0 || n2 <= 0)) {
        console.log("Informe números válidos maior que zero!");
        return;
    }

    let media = (n1 + n2) / 2;
    console.log(`Média: ${media}`);
}

calculaMedia(10, 5);