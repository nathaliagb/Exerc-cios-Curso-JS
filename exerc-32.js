/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

let vetor = [4, 5, 6, 10]
let soma = 0
let cont = 0
for (i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i]
    cont++
}

let media = soma / cont

console.log('Média: ' + media)