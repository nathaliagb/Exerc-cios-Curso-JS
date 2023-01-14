/* Fazer um programa para encontrar todos os pares entre 1 e 100. */

function par (i) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

let i = 1
for (i = 1; i <= 100; i++) {
    par(i);
}