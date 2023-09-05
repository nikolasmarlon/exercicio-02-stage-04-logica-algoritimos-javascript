

/**
     Nesse desafio você irá criar uma lista de **estudantes** e, cada 
     estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois de criada a lista:

    - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
    aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela com alert.


 */


const estudantes = [
    {
        nome: 'Edivaldo Estudante',
        provaUm: 8,
        provaDois: 4,
    },
    {
        nome: 'Ronaldo Corretor',
        provaUm: 9,
        provaDois: 8,
    },
    {
        nome: 'Ariosvaldo Neto',
        provaUm: 3,
        provaDois: 4,
    },
    {
        nome: 'Edmundo Muzulep',
        provaUm: 8,
        provaDois: 4,
    },
]



function calculaMedia (p1, p2) {
    let media = ((p1 + p2) / 2).toFixed(1)
    return media
}


for( let estudante of estudantes){

    let aprovado = ''
    let media = (calculaMedia(estudante.provaUm, estudante.provaDois))

    if ( media >= 7){
        aprovado = `Parabéns, ${estudante.nome}! Você foi aprovado(a) no curso!`
        
    } else {
        aprovado = `Não foi desta vez, ${estudante.nome}! Tente novamente!`
    }

    alert(`
        A média do(a) aluno(a) ${estudante.nome} é ${media}
        ${aprovado}
    `)
}