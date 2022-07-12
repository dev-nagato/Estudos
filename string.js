const escola = "cod3r"

console.log(escola.charAt(4)) // esse comando retorna a letra conforme sua numeração na centença , nesse caso eu pus 4 retornara a letra r
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0 , 3))
console.log('escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // esse comando substituiu o numero 3 pela letra e
console.log('Ana , maria , Pedro'.split(',')) // esse comando gera um array