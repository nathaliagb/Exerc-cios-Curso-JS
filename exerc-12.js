// Faça um algoritmo que calcule o fatorial de um número.

function fatorial (num) {
    if (num == 0 || num == 1){
        return 1
    }
    for (i = num -1; i >= 1; i--){
        num *= i
    }
    return num
}

console.log(fatorial (5))
console.log(fatorial (4))
console.log(fatorial (1))