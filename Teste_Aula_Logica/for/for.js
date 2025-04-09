//for(i = 0; i <= 50; i+=10){
//   console.log(i)
//}



/*let numInicial = 1
let numFinal = 100
for(let i = numInicial; i <= numFinal; i++){
    if(i % 2 ==0){
    console.log(`Número ${i} é par.`)
} else console.log(`Número ${i} é impar.`)
}
*/

const prompt=require('prompt-sync')({signt:true})
let anoInicial = 1935;
let anoFinal = 2025;
for(let ano = anoInicial; ano<=anoFinal; ano++){
    if(ano % 4 ===2 && ano!=1942 && ano!=1946){
        console.log(`O ${ano} foi ano de copa do mundo!`)
    } else{
        console.log(`O ${ano} não foi ano de copa do mundo!`)
    }
}
