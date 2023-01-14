/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function defineDia (dia) {
    switch (dia) {
        case 1:
            console.log('Fim de semana');
            break;
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia útil');
            break;
        case 7:
            console.log('Fim de semana')
            break
        default:
            console.log('Dia inválido')
    }
}

defineDia(1)
defineDia(2)
defineDia(3)
defineDia(4)
defineDia(5)
defineDia(6)
defineDia(7)
defineDia(55)