/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/
function conscessionaria(carros) {
    switch (carros) {
        case 'Hatch':
            return "Compra efetuada com sucesso."
        case 'Sedans':
        case 'Motocicletas':
        case 'Caminhonetes':
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Este modelo não esta disponivel!"
    }
}

console.log(conscessionaria('Hatch'))
console.log(conscessionaria('Sedans'))
console.log(conscessionaria('Motocicletas'))
console.log(conscessionaria('Caminhonetes'))   
console.log(conscessionaria('Opala'))