/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function simples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    resultado = capitalInicial*taxaDeJuros*tempoDeAplicacao;
    montante = resultado + capitalInicial;
    console.log(montante);
}

function composto (capitalInicialC, taxaDeJurosC, tempoDeAplicacaoC) {
    resultadoC = capitalInicialC*(1+taxaDeJurosC)**tempoDeAplicacaoC;
    console.log(resultadoC);
}

simples(1000, 0.02, 5);
composto(1000, 0.02, 5);