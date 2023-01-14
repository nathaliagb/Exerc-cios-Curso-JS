/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function multiplicacao (vetor1, int1) {
    let i = 0;
    let resultado1 = []
    for(i = 0; i < vetor1.length; i++){
        resultado1.push(vetor1[i]*int1)
    }
    return resultado1
}

function multiplicacaoMaiorCinco (vetor2, int2) {
    let i = 0;
    let resultado2 = []
    if(int2 > 5) {
        for(i = 0; i < vetor2.length; i++){
            resultado2.push(vetor2[i]*int2)
        }
        return resultado2
    }
    return resultado2
}

let vetor = [1, 2, 3, 4, 5]
console.log(multiplicacao(vetor, 3))
console.log(multiplicacaoMaiorCinco(vetor, 8))
console.log(multiplicacaoMaiorCinco(vetor, 3))