/*  Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

let vetor = [0, 2, -4, 7, -9, -555]
let menor = 0
for (i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
        menor++
    }
}

console.log('Quantidade de números negativos: ' + menor)