function edad(){
    let miEdad =5;
        if (miEdad >= 18){
            console.log("Eres mayor de edad"); 
        } 
        else{
        console.log("No eres mayor de edad")
        }

}
edad()//MANDAR A LLAMAR A LA FUNCION !!!!!

//return es enviar el resultado algun lado cuando la quieres sacar la funcion 
/* los operadores logicos gacen estructurar de controles mas grande
and,or,not 
and &&  or||(TECLA A LADO DEL 1) 


*/ 
function conjunciones(){
    let valor1=true;
    let valor2=false;
    if(valor1 && valor2){
        console.log("el valor 1 y el valor 2 son verdaderos");
    }
    else{
        console.log("Un valor es falso");
    }

}
conjunciones()
function disyuncion(){
    valor1=true;
    valor2=false;
    if(valor1|| valor2){

        console.log("El operador or es verdadero");
    }
    else{
        console.log("El operador or es falso ");
    }

}
disyuncion()

function negacion(){
    valor1=false;
    if(!(!valor1 )){
        console.log("El valor es "+valor1);

    }
    else{
        console.log("El valor negado  es "+valor1);
    }
}
negacion()