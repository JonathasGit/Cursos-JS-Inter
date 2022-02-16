const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5] ; 

function valoresUnicos(arr){
    const mySet = new Set(arr);
    /*Tem que colocar [...] para não ser set, mais para retornar um array com valores unicos.
      Vaic riar o elemento sprad,  vai formar um novo array
      Set para se tornar array, usar  o argumento hash
      
      */

    return [...mySet]
    
}
console.log(valoresUnicos(meuArray))