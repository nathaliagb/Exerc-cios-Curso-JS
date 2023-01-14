/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function planoDeSaude (idade) {
    if (idade < 10) {
        return "Valor a ser pago: R$180"
    } else if (idade >= 10 && idade < 30) {
        return "Valor a ser pago: R$150"
    } else if (idade >= 30 && idade < 60) {
        return "Valor a ser pago: R$195"
    } else if (idade >= 60) {
        return "Valor a ser pago: R$230"
    }
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(20))
console.log(planoDeSaude(45))
console.log(planoDeSaude(65))