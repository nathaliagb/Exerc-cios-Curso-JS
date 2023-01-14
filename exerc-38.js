/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function impar (menor = 0, maior = 100) {
    if (menor > maior) {
        let aux
        aux = menor
        menor = maior
        maior = aux
    }
    let i = 0;
    for (i = menor; i <= maior; i ++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    }
}

impar(8, 4)
impar(1, 75)
impar()