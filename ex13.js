/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura switch.*/
function classificarDias(numeros) {
    switch (numeros) {
        case 1:
            return "Final de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia ultil"
        case 7:
            return "final de semana"
        default:
            return "Dia invalido"
    }
}

console.log(classificarDias(1))
console.log(classificarDias(2))
console.log(classificarDias(3))
console.log(classificarDias(4))
console.log(classificarDias(5))
console.log(classificarDias(6))
console.log(classificarDias(7))
console.log(classificarDias('a'))