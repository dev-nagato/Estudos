
function calculadora(number1, operador, number2){
    let result

    switch (operador){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 *number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não imolementado')
            break                
    }

    return result
}
console.log(calculadora(4, '*', 8))