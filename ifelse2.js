Number.prototype.entre = function (inicio, fim) {
    return this >= inicio  && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Hora')
    } else if(nota.entre(7, 8.99)){
        console.log('Aluno Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Aluno em recuperação') 
    }else if(nota.entre(0, 3.99)){
        console.log('Aluno Reprovado')
    }else {
        console.log('Nota invalida')
    }
    console.log('FIM')
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)