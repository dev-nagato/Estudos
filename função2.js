// armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função em arrow uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b      // quando não se tem as chaves , o corpo da função  significa que teremos uma função que tem apenas uma unica linha
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')