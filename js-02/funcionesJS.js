/* let miNombre="Josue Perez Neyra";
console.log(miNombre);

function miNombres(){ 
    let nombres="Josue"
    console.log(nombres);

     
}*/
/* miNombres();
function funcion1(){
    let valor =2;
    valor=valor +3;
    return valor;
}
let resultado=funcion1();
console.log("el resultado es: "+ resultado);
 */

function funcion2(){
    let valor1 =2;
    valor1 = valor1 +3;
    console.log("el resultado es: " + valor1);
  
}
funcion2();

let variableGlobal= 8;
 function funcion3(){
    let variableLocal ="El valor es. ";
    console.log(variableLocal + variableGlobal);


 }
 funcion3();

function funcion4(valor = 4){
    let numero=6;
    numero= numero * valor;
    return numero;

}
let salida = funcion4(2);
console.log("El producto es " + salida);


let miFuncion0 = function(parametro){


    parametro = parametro * 2;
    return parametro;
};
console.log("Llamado a la funcion anonima  " + miFuncion0 (4)) ;


let miFuncion01 = function(caracteres){
    return "Hola "+caracteres;
}(" Lunes ");
console.log("El resultado es: " + miFuncion01);


let semana = function( dias){
    return "Los dias de la semana son:" + dias;
}("Lunes Martes Miercoles Jueves Viernes Sabado Domingo");
console.log(semana);

/* Flecha mo usa nombre solo variables  */
 let suma = (x,y) => {return x+y};
 let FlechaResultado = suma (5,3);
 console.log("La suma es  "+FlechaResultado);

 /* function calcularPrecioTotal(precio){
    let impuesto=1.16;
     let gastosEnvios=10;
     PrecioTotal= (precio * impuesto)+gastosEnvios;
     return PrecioTotal;
 
 }
let ResultadoEjercicio = calcularPrecioTotal();
console.log(ResultadoEjercicio);  */





/* Funcion estandar */
 function calcularPrecioTotal(precio, porcentajeImpuestos){
    precio=23.34;
    porcentajeImpuestos=16;
    let impuesto=1.16;
    let gastosEnvios=10;
    PrecioTotal= (precio * impuesto)+gastosEnvios;
    precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
     return PrecioTotal,precioConImpuestos;
 
 }
 calcularPrecioTotal();
console.log(PrecioTotal );
console.log( precioConImpuestos); 

/* funcion anonima */
let porcentajeImpuestos = function(precio,porcentajeImpuestos  ){
    precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
    return precioConImpuestos;

}(23.34, 16);
console.log(porcentajeImpuestos);

/* funcion flecha  */
let calcularPrecioTotal = (precio,porcentajeImpuestos) => {

    let impuesto= 1.16;
    let gastosEnvio=10;
    precioTotal=(precio*impuesto)+gastosEnvio;
    precioConImpuestos=((1+porcentajeImpuestos)/100)*precio;
    
    return precioTotal,precioConImpuestos;
}
let precioTotalConImpuesto=calcularPrecioTotal(23.34, 16);
console.log(precioTotalConImpuesto);


/* let PrecioTotal = calcularPrecioTotal (23.34,1.16,10);
console.log("Total = "+PrecioTotal);
 */








 


