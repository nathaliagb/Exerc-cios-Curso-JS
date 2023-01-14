/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

let vetor = [10, 20 , 2, 90, 80, 25, 15, 13, 60]
let dentro = 0
let fora = 0
for (i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
        dentro++
    } else {
        fora ++
    }
}
console.log('Números dentro do intervalo:' + dentro)
console.log('Números fora do intervalo:' + fora)