// operador condicional (Ternario)

// Dependendo da condição nos receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

//Exemplos

//Cafe da manha top

let pao = true
let queijo = true

const CafeTop = pao && queijo ? 'cafe show' : 'cafe sem graça'
console.log(CafeTop)

let cafe = true
let leite = true

const CafeShow = cafe || leite ? 'cafe show' : 'cafe sem graça'
console.log(CafeShow)

// Maior de 18

const idade = 15
const dirigir = idade >=18 ? 'pode dirigir' :  'não pode dirigir'
console.log(dirigir)