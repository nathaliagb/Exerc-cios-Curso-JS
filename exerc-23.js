/*  Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function calculaMedia (codigo, nota1, nota2, nota3){
    let maiorNota = 0;
    if (nota1 >= nota2 && nota1 >= nota3) {
        maiorNota = nota1
        media = (4 * maiorNota + 3 * nota2 + 3 * nota3) / (4 + 3 + 3)
        if (media >= 5){
            return 'Código do Aluno: ' + codigo + ' Notas: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' Média das notas: ' + media + ' Aprovado'
        } else {
            return 'Código do Aluno: ' + codigo + ' Notas: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' Média das notas: ' + media + ' Reprovado'
        }
    } else if (nota2 >= nota1 && nota2 >= nota3) {
        maiorNota = nota2
        media = (4 * maiorNota + 3 * nota1 + 3 * nota3) / (4 + 3 + 3)
        if (media >= 5){
            return 'Código do Aluno: ' + codigo + ' Notas: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' Média das notas: ' + media + ' Aprovado'
        } else {
            return 'Código do Aluno: ' + codigo + ' Notas: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' Média das notas: ' + media + ' Reprovado'
        }
    } else {
        maiorNota = nota3
        media = (4 * maiorNota + 3 * nota1 + 3 * nota2) / (4 + 3 + 3)
        if (media >= 5){
            return 'Código do Aluno: ' + codigo + ' Notas: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' Média das notas: ' + media + ' Aprovado'
        } else {
            return 'Código do Aluno: ' + codigo + ' Notas: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' Média das notas: ' + media + ' Reprovado'
        }
    }
}

console.log(calculaMedia(123, 4, 5, 8))
console.log(calculaMedia(124, 4, 3, 2))
console.log(calculaMedia(124, 4, 9, 5))