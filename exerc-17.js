/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */

function calculaAumento(plano, salarioAtual){
    let novoSalario = 0
    switch (plano) {
        case 'A':
            aumento = (salarioAtual*10)/100
            novoSalario = salarioAtual + aumento
            return "Novo salário:" + novoSalario
        case 'B':
            aumento = (salarioAtual*15)/100
            novoSalario = salarioAtual + aumento
            return "Novo salário:" + novoSalario
        case 'C':
            aumento = (salarioAtual*20)/100
            novoSalario = salarioAtual + aumento
            return "Novo salário:" + novoSalario
        default:
            return "Plano inválido"
    }
}

console.log(calculaAumento('A', 1000))
console.log(calculaAumento('B', 1000))
console.log(calculaAumento('C', 1000))
console.log(calculaAumento('S', 1000))