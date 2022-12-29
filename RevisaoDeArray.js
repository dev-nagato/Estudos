//Array

const animais = [
    'leao',
    'macaco',
    'urso'
]

// acessar valores dentro do array
// para pegar a posição do array se os numeros e sempre começa por 0

//console.log(animais[0])

// para saber o total de posições no array se usa length
console.log(animais.length)

// array com um objeto dentro

const mercado = [
    'uva',
    'banana',
    {
        carne: 'picanha',
        valor: 60
    }
]

console.log(mercado[2].carne)