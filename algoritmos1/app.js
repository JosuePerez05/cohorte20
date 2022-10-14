//alert("Hola mundo desde visual studio code!");//este alert es una alerta en el programa 
/* este es un 
bloque de 
comentario 
*/

//declarando una variable 

let miVariable;//variables vacias



//inicializar una variable
const otraVariable= 5;//indicarle un valor desde el inicio 
miVariable = "Hola ";
let nombre="Josue";


console.log(nombre);//nos permite mostrar la variable desde la consola 
console.log(miVariable);
console.log(otraVariable);

//mutaciion de valor, reasignacion solo funciona con let 
//const noo permite cambiar el valor 
console.log(miVariable);
miVariable =5;
console.log(miVariable);
/* Valores primitivos 
String -Cadena de texto 
palabras, nombre caracteres*/ 
let palabra = "cualquier palabra ?$-%/(/)";
console.log(palabra);
// Number - numero 
let num = 3;
let num2 = 65.560;
let num3 = -9800;
console.log(num);
console.log(num2);
console.log(num2);
console.log(num,num2,num3);
//suma de variables 
console.log(num+num2+num3);
console.log("Este numero es ",num);
console.log("Este numero es "+num);
/*boolean - bolenano 
true -false
*/
let verdadero =true;
let falso =false;
console.log(verdadero);
console.log(falso);
/* null */ 
let valorNulo=null;
console.log(valorNulo);
/* underfined es un estado (valor indefinido*/
let varUnder;
console.log(varUnder+1);//da el valor NaN
//variables compuestos
let a=1;
let b="hola";
let c="true";
console.log(typeof a)//indica el tipo de valor que tiene asignado
