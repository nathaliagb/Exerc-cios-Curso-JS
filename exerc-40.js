/*  Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function conceitoNotas (vetor) {
    let i = 0
    let resultados = []
    for (i =0; i < vetor.length; i++) {
        if (vetor[i] > 0 && vetor[i] < 5) {
            resultados[i] = 'D'
        } else if (vetor[i] >= 5 && vetor[i] < 7) {
            resultados[i] = 'C'
        } else if (vetor[i] >= 7 && vetor[i] < 9) {
            resultados[i] = 'B'
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            resultados[i] = 'A'
        }
    }
    return resultados
}

let notas = [3, 4, 9, 5, 7, 8.3]
console.log(conceitoNotas(notas))