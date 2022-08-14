const imprimirResultado = function (nota){
    if(nota >= 7){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // nesse caso imprime reprovado por que e false , pelo fato de ser uma string comparada a um number...