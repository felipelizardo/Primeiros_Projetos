/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/
function lanchonete(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return quantidade * 3.00
        break
        case 200:
            return quantidade * 4.00
        break
        case 300:
            return quantidade * 5.50
        break
        case 400:
            return quantidade * 7.50
        break
        case 500:
            return quantidade * 3.50
        break
        case 600:
            return quantidade * 2.80
        break
        default:
            return 'produto não existe!'
    }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 2))
console.log(lanchonete(400, 2))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 2))
console.log(lanchonete(700, 2))