/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3*/

function divisivel (num) {
    if(num % 3 == 0) {
        console.log(num + ' é divisível por 3')
    } else {
        console.log(num + ' não é divisível por 3')
    }
}

divisivel(6)
divisivel(9)
divisivel(8)