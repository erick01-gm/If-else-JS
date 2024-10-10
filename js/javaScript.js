//prgramq que calcule la cuenta 
let  Totalcomida, comida1, comida2; 
let  Totalbebida, bebida1, bebida2; 
let totalCuenta; 

comida1 = 2800; 
comida2 = 1300; 
bebida1 = 900; 
bebida2 = 650; 
Totalcomida = comida1 + comida2; 
Totalbebida =  bebida1 + bebida2; 
totalCuenta = Totalbebida + Totalcomida;

console.log('El total de comida fue de', Totalcomida); 
console.log('El total de bebida fue de ', Totalbebida);
console.log('El total de la cuenta  es de ',totalCuenta); 

/*
//Programa usando swicth para mostrar el color
var color = prompt('Dame un color');

switch(color){
    case "rojo": 
    console.log('Color rojo'); 
    break;
    case "azul":
        console.log('Color azul'); 
        break; 
    case "verde":
        console.log('Color verde'); 
        break; 
    default:
        console.log('No esta ese color'); 
        break; 
}
*/

/*
Ejercicio
Ingresar dos numeros mediante un prompt y almacenar sus valores en avaraibles
distintas, realizar una resta entre los dos valore, almacenar en una variable
si el resultado de la resta es mayor a 0, mostrar mediante conole.log
"Es mayor que cero" si es mayor a 0 comparar si el numeroe es par, en caso
de que lo sea mostrar mensaje "es par" en caos contrario "Es impar"
*/
let num1 = prompt('Dame el primer numero...'); 
let num2 = prompt('Dame el segundo numero...'); 
let resultado = num1 - num2; 

if (resultado > 0){
    console.log('Es mayor a 0');
    if(resultado%2 == 0){
        console.log('El resultado es par'); 
    }else{
        console.log('El resultaod es impar'); 
    }
}else{
    console.log('Es menor que 0'); 
}





