/*  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores. */

function operacoes(x,y) {
    let soma = x + y;
    let sub = x - y;
    let mult = x * y;
    let div = x / y;
    console.log(soma, sub, mult, div);
}

operacoes(4,2);