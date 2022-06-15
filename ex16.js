/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/
function cauculadora(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2
        break
        case '-':
            return num1 - num2
        break
        case '*':
            return num1 * num2
        break
        case '/':
            return num1 / num2
        default:
            return "Operação invalida"
    }
}

console.log(cauculadora(8, '+', 5))
console.log(cauculadora(15,  '-', 5))
console.log(cauculadora(4, '*', 10))
console.log(cauculadora(4, '/', 2))
console.log(cauculadora('matheus'))