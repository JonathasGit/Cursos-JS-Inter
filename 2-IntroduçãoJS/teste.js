// var y = 0; 
var desconto = 10;
const PRECO = 200;
var total = PRECO - desconto;
console.log(total)

// Comentário de uma linha 

/*Comentário de 
multiplas linhas
muitas 
*/ 

//Declarando funções - Sintaxe de uma função.

function soma(a,b){
    console.log(a+b);
    return a + b; //15

}

soma(10,5);

console.log('Hello World');

function returnEvenValues(array) {
    let evenNums = []; //Lista vazia
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 ===0 ){ // 
            evenNums.push(array[i]);
        } else{
            console.log( '${array[i]} não é par!') //  Retornar errado
        }
    }
    console.log('Os números pares são: ' + evenNums); 
}

let array = [1, 2, 4, 5, 7, 8, 10, 11, 22, 13, 15, 17, 21, 30, 14, 31, 50];

returnEvenValues(array);
