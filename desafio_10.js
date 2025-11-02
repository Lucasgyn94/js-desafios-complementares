/*
10. Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

*/

const verificaSeObjetoPresente = (estudantes, estudanteProcurado) => {
    let estudantePresente = estudantes.some(item => JSON.stringify(item) === JSON.stringify(estudanteProcurado));

    if (estudantePresente) {
        console.log(`O aluno: ${estudanteProcurado.nome} está presente no array`);
    } else {
        console.log(`O aluno ${estudanteProcurado.nome} não está presente no array`);
}

}

let estudantes = [
    {
        nome: "Lucas",
        idade: 30
    },
    {
        nome: "Tampinha",
        idade: 5
    },
    {
        nome: "Fernando",
        idade: 35
    },
    {
        nome: "Edson",
        idade: 39
    }
]

let estudanteProcurado = {nome: "Lucas", idade: 30};

verificaSeObjetoPresente(estudantes, estudanteProcurado);
// console.log(estudantes);
// console.log(estudanteProcurado);

