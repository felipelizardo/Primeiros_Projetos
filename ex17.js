/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
function salarioMensal(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual + (salarioAtual * 0.10)
        break
        case 'B':
            return salarioAtual + (salarioAtual * 0.15)
        break    
        case 'C':
            return salarioAtual + (salarioAtual * 0.20)
            default:
        return "Plano invalido"    
    }
}

console.log(salarioMensal('A', 2000))
console.log(salarioMensal('B', 2000))
console.log(salarioMensal('C', 2000))
console.log(salarioMensal('X', 5000))

