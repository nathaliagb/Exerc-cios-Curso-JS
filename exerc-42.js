/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias 
(Desconsiderar anos bissextos e dia do aniversário) */

function idadeEmDias (idade) {
    let dias = 0
    dias = idade * 365
    return dias
}

console.log(idadeEmDias(20))