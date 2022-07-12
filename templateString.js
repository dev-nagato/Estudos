const nome = 'rebeca'
const concatenacao = ' ola ' + nome + '!'
const template = `
    ola
    ${nome}! `
    console.log(concatenacao,template)
    // e possivel colocar dentro do template string expressões

    console.log(` 1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase()
    console.log(`ei.. ${up('cuidado')}!`)