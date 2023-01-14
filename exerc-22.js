/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function pagamentoAssociacao (mes, anuidade) {
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (anuidade * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(pagamentoAssociacao(2, 1000))
console.log(pagamentoAssociacao(5, 1000))
console.log(pagamentoAssociacao(8, 1000))
console.log(pagamentoAssociacao(13, 1000))