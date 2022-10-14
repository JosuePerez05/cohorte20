
//let miVariable = (prompt("¿Cual es tu nombre?"));
function SaludoPer(){
    alert(miVariable);
    
}
function suma(){
   // let num1 =parseInt( prompt("ingrese el numero 1"));
    //let num2=parseInt (prompt("ingrese el numero 2"));
    let num1=5;
    let num2=6;
    
    let suma=num1+num2;
    return suma;
}

//alert(suma());
console.log("El resultado de la suma es: "+ suma());
 
function resta(){
    let num1=10;
    let num2=5;
    return num1-num2

}
console.log ("el rsultado de la resta es  "+ resta());

function mult(){
    let num1=10;
    let num2=5;
    return num1*num2

}
console.log ("el rsultado de la multiplicaion es  "+ mult());

function div(){
    let num1=10;
    let num2=5;
    if (true) {
        console.log ("el denominador es 0")
    
    return num1/num2
    }
}

console.log ("el rsultado de la divicion es  "+ div());
 
function resto(){
    let num1=7;
    let num2=2;    
    return num1%num2

}
console.log ("el rsultado de la resto es  "+ resto());


function adicionales(){
    let num1=7;
    num1 /=num1;
    return num1;// ++ incrementa +1

}
console.log ("el rsultado es  "+ adicionales());

function logico(){
    let valido =5;
    let valido2=5;
    if(valido >= valido2){
        console.log("El mayor es: "+valido2)
    }
     //   console.log(" El valor boolenano es:"+valido);
}
logico();


