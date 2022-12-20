function MeuNome (nome) {
    console.log('antes de de execultar a função callback')
    nome()

    console.log('depois de execultar a callback')
}

MeuNome (
    () => {
        console.log('estou em uma callback')
    }
)