/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque) 
    while (valorSaque > valorNota) {
        switch(valorNota) {
            case 100:
                contador100 -= 100
                contador100++
            break
            case 50:
                contador50 -= 50
                contador50++
            break
            case 10:
                contador10 -= 10
                contador10++
            break
            case 1:
                contador1 -= 1
                contador1++
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(contador100, contador50, contador10, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10 
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(valorSaque) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} notas(s) de R$100,00 reais`
    } else if (contador50 > 0) {
        resultado += `${contador50} notas(s) de R$50,00 reais`
    } else if (contador10 > 0) {
        resultado += `${contador10} notas(s) de R$10,00 reais` 
    } else if (contador1 > 0) {
        resultado += `${contador1} notas(s) de R$1,00 reais`
    }
    return resultado
}

console.log(sacarDinheiro(125))