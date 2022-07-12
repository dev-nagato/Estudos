const peso1 = 1.0
const peso2 = Number('2.0') // sempre escrever Number com o N maiusculo

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //number.isInteger checa se o numero e inteiro , se for inteiro retorna true , senão retorna false
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / ( peso1 + peso2)

console.log(media.toFixed(2)) // a função tofixed serve para informar quantas casa decimais voce ira querer depois do ponto nesse caso foram duas(2)
console.log(media.toString(2)) // essa função coverte em binario 
console.log(typeof media)
console.log(typeof Number) // number com n minusculo e o tipo do dado para quando se tem um valor numerico , Number com N maiusculo e uma função