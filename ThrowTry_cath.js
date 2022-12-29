//throw

function DigaMeuNome(nome = ''){
    if(nome === ''){
        throw 'Nome é obrigatorio'
    }

    console.log(nome)
}


//try...cath

try{

DigaMeuNome('Nagato')

}catch(e){

    console.log(e)
}

console.log('apos o try cath')