const valores = [7.7 , 8.9 , 6.3 , 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // no javascript quando tenta se assesar um item que nao existe da undefined , nesse caso  o item 4 não existe pois o array começa sempre em 0

valores [4] = 10 
console.log(valores)
console.log(valores.length) // esse comando mostra quantos valores estão guardados no array

valores.push({id:3}, false, null, 'teste') // essa função adiciona valores no array
console.log(valores)
console.log(valores.pop()) // essa funçao retira o ultimo valor do array e retorna
delete valores [0] // essa funçao deleta um valor do array conforme o numero do indice
console.log(valores)

console.log(typeof valores) // em javascript um array e do tipo ebject  
console.log(valores)


