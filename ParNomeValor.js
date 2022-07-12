// par nome / valor
const saudacao = 'opa' // contexto lexico 1

function exec() {
    const saudacao = 'falaaaa'   // contexto lexico 2
    return saudacao
}

// objetos sao grupos aninhados de pares nome / valor
const cliente = {
    nome: 'Pedro', 
    idade: 32 ,
    peso: 90 ,
    endereco: {
        logradouro: 'Rua dos bobos' ,
        numero: 0

    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)