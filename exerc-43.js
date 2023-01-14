/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhados por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X",
em que X é o quanto o funcionário ganhou no mês */

function salario(horas, salarioHora) {
    let resultado = horas * salarioHora
    return 'Salário igual a R$ ' + resultado
}

console.log(salario(200, 10))