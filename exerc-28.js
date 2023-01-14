/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let numeros = [1, 8, 9, 5, 7, 10, 12]
let par = 0
let impar = 0
for(i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 ==0){
        par++
    } else if (numeros[i] % 2 != 0) {
        impar++
    }
}
console.log(par)
console.log(impar)