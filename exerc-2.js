/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. ]
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). */

function triangulo(a, b, c) {
    if (a == b && b == c) {
        console.log("Triâgulo Equilátero");
    } else if ((a == b & b != c) | (a == c & c != b) | (b == c & c != a)) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
}

triangulo(1,10,10);
triangulo(8,8,8);
triangulo(6,7,8);
