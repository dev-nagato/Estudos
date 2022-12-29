// if...else (se , senao)

/*let temperatura = 36.5

if(temperatura >= 37.5){
    console.log('febre alta')
}else if(temperatura < 37.5 && temperatura >=37){
    console.log('febre moderada')
}else{
    console.log('saudavel')
}  jeito 1 de se fazer */


let temperatura = 36.5
let TemperaturaAlta = temperatura >= 37.5
let TemperaMedia = temperatura < 37.5 && temperatura >= 37

if(TemperaturaAlta){
    console.log('febre alta')
}else if(TemperaMedia){
    console.log('febre moderada')
}else{
    console.log('saudavel')
}