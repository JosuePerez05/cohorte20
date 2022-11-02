/* El control de flujo */
// evalua rango de valores
/* let edad =Number(prompt("Escribe tu edad")); */// Number convierte el valor que esta entrando a numero


/* if (condicion == true){
    bloque 
    codigo
} */

/* console.log(edad===18); */

//console.log(18==="18");

// == operador de comparacion 
//=== comparacion estricta(preferible usar este)

//console.log(typeof edad);
/* 
if(edad <= 17){
    document.write("tas chiquito");//document.write inserta algo dentro de la pagina educativo
}else if(edad===18){
    document.write("Eres mayor de edad");
}else if(edad > 18){
    document.write("Tas ruco");

}else {
    document.write("Ese no es un numero valido");
} */
//operadores logicos 
// && AND
// || OR
// ! NOT


/* if( (edad>0) && (edad <= 17) ){
    document.write("tas chiquito");//document.write inserta algo dentro de la pagina educativo
}else if(edad===18){
    document.write("Eres mayor de edad");
}else if(edad > 18){
    document.write("Tas ruco");

}else {
    document.write("Ese no es un numero valido");
} */


/* M0uestre el dia de la semana  */
let dia = 2;

if(dia ===1){
    document.write("LUNES")
}else if(dia ===2){
    document.write("MARTES")
}else if(dia ===3){
    document.write("MIERCOLES")
}else if(dia ===4){
    document.write("JUEVES")
} else if(dia ===5){
    document.write("VIERNES")
} else if(dia ===5){
    document.write("sABADO")
}else if(dia ===5){
    document.write("DOMINGO")
}else{
    document.write("No es un numero valido")
}