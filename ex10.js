/*10)Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/
function verificar(numInt) {
    if (numInt % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificar(45))
console.log(verificar(23))
console.log(verificar(12))
console.log(verificar(9))
console.log(verificar(200))