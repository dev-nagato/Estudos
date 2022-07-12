function tratarErroElancar(erro){
    throw new Error('deu ruim filho')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUppercase()+ '!!!')
    } catch (e) {
        tratarErroElancar(e)
    }
}
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
