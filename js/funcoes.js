


function media(){

var x = parseInt(document.getElementById("pnum").value);
var y = parseInt(document.getElementById("snum").value);
var total;

total = (x+y)/2;

document.getElementById('tot').value = total;

}

function limpar(){
	
document.getElementById("pnum").value ="";
document.getElementById("snum").value ="";
document.getElementById("tot").value ="";
	
}

function escrevernumerosate_while(){
 
 var x = parseInt(document.getElementById('num').value);
 var y = 0; 
 
 while (y < x){
	
	y = y + 1;
	document.write(y, "</br>");


  }
  document.write('<a href="' + document.referrer + '"><button type="submit" value="teste">Voltar</button></a>');
 
}

function escrevernumerosate_do(){
 
 var x = parseInt(document.getElementById('nums').value);
 var y = 0; 
 
do{
	y = y + 1;
	document.write(y, "</br>");
  } while(y < x);
  
 document.write('<a href="' + document.referrer + '"><button type="submit" value="teste">Voltar</button></a>');
}


function escrevernumerosate_for(){
 
 var x = parseInt(document.getElementById('nums1').value);
 
 
 for(var y = 1; y <=x; y++){
 
	document.write(y, "</br>");
	
  }
  document.write('<a href="' + document.referrer + '"><button type="submit" value="teste">Voltar</button></a>');
}


function divisiveis(){

var x = parseInt(document.getElementById('div').value);
var y = parseInt(document.getElementById('ate').value);
var z = 0;

while (z < y){

      z = z + 1;
	  
	  if(z % x ==0){
	  document.write(z, '</br>');
	  
	  }
 
}

 document.write('<a href="' + document.referrer + '"><button type="submit" value="teste">Voltar</button></a>');
}






