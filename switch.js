const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de honra')
            break
        case 8: case 7: // o case pode ser colocado em linhas diferentes ou na mesma linha...
            console.log('Aprovado')
            break       // usamos o break para se a condição for atingida ela execute a proxima sem repetir...
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')          

    }
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)