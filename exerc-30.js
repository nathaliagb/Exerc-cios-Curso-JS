/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

let vetor = [1, 5, 8, 44, 99, 85, 4, 22, 3, 105]
let menor = vetor[0]
let maior = vetor[0]

for (i = 0; i < vetor.length; i++) {
    if(vetor[i] >= maior) {
        maior = vetor[i]
    }
    if(vetor[i] <= menor) {
        menor = vetor[i]
    }
}

console.log('Maior no vetor: ' + maior)
console.log('Menor no vetor: ' + menor)