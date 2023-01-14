/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function quantidadeDeAnos (altMenor, taxaAltMenor, altMaior, taxaAltMaior) {
    let anos = 0
    while(altMenor < altMaior) {
        altMenor += taxaAltMenor
        altMaior += taxaAltMaior
        anos++
    }
    return anos
}

function crescimento (altura1, taxa1, altura2, taxa2){
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if (taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return 'A criança menor ultrapassará a maior em' + quantidadeDeAnos(altura2, taxa2, altura1, taxa1) + ' anos'
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            } else{
               return 'A criança menor ultrapassará a maior em' + quantidadeDeAnos(altura1, taxa1, altura2, taxa2) + ' anos'
            }
        }
    }
}

console.log(crescimento(155, 3, 150, 5))
console.log(crescimento(120, 3, 150, 1))
console.log(crescimento(120, 3, 120, 1))