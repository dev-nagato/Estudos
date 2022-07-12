let isAtivo = false;
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isativo = 1
console.log(!isAtivo)   /* !! usando a negação duas vezes significa que o valor e verdadeiro
                   e usando a negação ! uma vez significa que o valor e falso                
                   */
 
                   console.log('os verdadeiros...')
                   console.log(!!3)
                   console.log(!!-1)
                   console.log(!!' ')
                   console.log(!![])
                   console.log(!!{})
                   console.log(!!Infinity)
                   console.log(!!(isAtivo = true))

                   console.log('os falsos...')
                   console.log(!!0)
                   console.log(!!"") // uma string vazia retorna falso , ja uma string com espaço retorna true
                   console.log(!!null)
                   console.log(!!NaN)
                   console.log(!!undefined)
                   console.log(!!(isAtivo = false))

                   console.log('para finalizar...')
                   console.log(!!('' || null || 0 || ' ')) // essas duas barrinhas em pe || se chama ou

                   let nome = ''
                   console.log(nome || 'desconhecido')