/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function notas (valor) {
    let cont100 = 0;
    let cont50 = 0;
    let cont10 = 0;
    let cont5 = 0;
    let cont1 = 0;
    while (valor > 100) {
        valor -= 100
        cont100++
    }
    while (valor < 100 && valor >= 50) {
        valor -= 50
        cont50++
    }
    while (valor < 50 && valor >= 10) {
        valor -= 10
        cont10++
    }
    while (valor < 10 && valor >= 5) {
        valor -= 5
        cont5++
    }
    while (valor < 5 && valor > 0) {
        valor -= 1
        cont1++
    }

    console.log('Notas de 100: ' + cont100)
    console.log('Notas de 50: ' + cont50)
    console.log('Notas de 10: ' + cont10)
    console.log('Notas de 5: ' + cont5)
    console.log('Notas de 1: ' + cont1)
}

notas(185)
notas(287)