/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function jurosSimples(capitalInicial, juros, tempo) {
    return capitalInicial + (capitalInicial * juros * tempo)
    }

    function jurosComposto(capitalInicial, juros, tempo) {
        return capitalInicial * (1 + juros) ** tempo
    }

    console.log(jurosSimples(5000, 0.1, 2))
    console.log(jurosComposto(5000, 0.1, 2))