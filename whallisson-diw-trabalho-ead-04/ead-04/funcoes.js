//exercicio 00
var nome;
function escreverOla(nome){
	console.log("Olá,"+nome+"!");
}
escreverOla("Raphael");
escreverOla("Bruno");
escreverOla("Marcelle");
// exercicio 01
var a, b;
function media(a,b){
	console.log((a + b) / 2);
}
//exercicio 03
// var num1, num2;
// function escreverNumerosAte_for(num1, num2) {	
// 	for (var i = num1; num1 < num2 ? (i <= num2) : (i >= num2); num1 < num2 ? i++ : i --) {		
// 		console.log(i);
// 	}
// }
function escreverNumerosAte(n) {
    var i = 1;
   do {
       
     console.log(i);
        i++;
       
   }  while (i <= n);

}
// function escreverNumerosAte_Do(num1, num2){
// 	do {
// 		num1 = num1 + 1;
// 		console.log(num1);
// 	}	while(num1 < num2);
// }
// function escreverNumerosAte_while(num1, num2){
// 	var num1 = 0 ;
//  	var num2 = 0; 
 
//  	while (num2 < num1){
	
// 	num2 = num2 + 1;
// 	console.log(num2);
// 	}
// }

//exercicio 04
var y, x, z;
z = 0;
function divisiveisPor(x,y) {

	while (z < y){
		z = z + 1;
		if (z % x == 0) {
			console.log(z);
		}
	}
}
//exercicio 05
var vetor = 0;
function maiorMenor(vetor) {
	var numMaior = Math.max.apply(null,vetor);
	var numMenor = Math.min.apply(null,vetor);

	console.log("Numero Maior: " + numMaior);
	console.log("Numero Menor: " + numMenor);
}