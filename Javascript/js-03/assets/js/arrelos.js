/* conts - let-local
var-variable global */


const numeros = [2,4,6,57,200];
let suma=0;

//forEach
/* //recorre todo el arreglo y ejecuta el codigo 
que le indiquemos sobre los valore guardados  */

/*numeros.forEach(function sumar (elemento){ 
    suma=suma + elemento
     suma += elemento 
    return suma;




});*/


numeros.forEach((el, indice, arreglo)=> {
    console.log(el, indice, arreglo);

});
/*  map genera una copia del arreglo original */

let nuevoArr=numeros.map((el)=>{
    console.log(el*el);
});
console.log(nuevoArr);

/*Filter
Crea una copia del arreglo original y nos permite filtrar*/

const frutas=["Papaya" ,"manzana", "manzana", "uva"];

let frutaFiltrada =frutas.filter((frutas) =>frutas.length > 3);
console.log(frutaFiltrada);


