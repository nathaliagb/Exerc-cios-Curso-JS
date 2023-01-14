/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocaElementos (vetorA, vetorB) {
    if (vetorA.length != vetorB.length) {
        return 'Vetores de tamanhos diferentes'
    } 
    let i = 0;
    let tamanhoVetores = vetorA.length
    for(i = 0; i < tamanhoVetores; i++) {
        vetorA.push(vetorB[i])
        vetorB.push(vetorA[i])
    }

    vetorA.splice(0, tamanhoVetores)
    vetorB.splice(0, tamanhoVetores)

    console.log ('Vetor 1: ' + vetorA)
    console.log ('Vetor 2: ' + vetorB)
}

vetor1 = [1, 3, 5]
vetor2 = [2, 4, 6]

trocaElementos(vetor1, vetor2)