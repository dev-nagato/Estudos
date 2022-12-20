//manipulando arrays , utilizando metodos

let tecnologias = ['html','css','js']

//adicionar um item no fim
console.log(tecnologias.push('ts'))
//adicionar no começo
tecnologias.unshift('node')
//remover do fim
tecnologias.pop()
//remover do começo
tecnologias.shift()
//pegar somente alguns elementos do array
console.log(tecnologias.slice(1,3))
//remover um ou mais items de qualquer posição do array
tecnologias.splice(1,1)
//encontrar a posição de um elemento no array
let index = tecnologias.indexOf('js')
console.log(index)
