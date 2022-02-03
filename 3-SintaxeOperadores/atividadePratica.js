 function comparaNumeros (num1, num2){
     if(!num1 || !num2) return "Defina 2 números"; // Validação - Se numero 1 e numero 2 não existe = 
     const primeiraFrase = criaPrimeiraFrase(num1, num2);
     const segundaFrase = criaSegundaFrase (num1, num2);

     return primeiraFrase + segundaFrase;
     return `${primeiraFrase}${segundaFrase}`;
     /*const saoIguais = num1 === num2; // Comparando, se verdadeiro true.
     const soma = num1 + num2; */

     /*If ternário 
     return saoIguais ? "São iguais" : "Não são iguais"; */

     /*if(saoIguais) { // Se os números for iguais, retornar a frase são iguais
         return "São iguais"
     }

     return "Não são iguais" // pode retornar assim se a função terminar aqui, sem usar o if else
     */

 }

 function criaPrimeiraFrase(num1, num2) {
     // Se os números são iguais
     let saoIguais = ""; 
     if(num1 === num2) {
         saoIguais = 'não'; 
     }
     //return "Os números " + num1 + "e" + num2 + saoIguais + " são iguais." // Primeira frase
     return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`; // Retorna errado.
       }

 function criaSegundaFrase(num1, num2){
     const soma = num1 + num2; // Soma dos valores
     let resultado10 = "menor";
     let resultado20 = "menor";
     const compara10 = soma > 10;
     const compara20 = soma >  20;

     if(compara10){
         resultado10 = "maior";
     }
     if (compara20){
         resultado20 = "maior";
     }

     //return "Sua soma é " + soma + ", que é " + resultado10 + "que 10  " + resultado20 + "que 20. "
     return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
 } 

 console.log(comparaNumeros(10,8)); // Chamando a função 