/* let precio =Number(prompt("Ingrese el Precio "));
let cupon  =String(prompt("Ingrese el cupon que desea 1.Bronce 2.Plata 3.Oro  4.Platino  "));
 cupon=cupon.toLowerCase(); /*todo lo vuelve */

/* switch(cupon){
    case "bronce": 
    desc=((precio*5)/100)
    Total=precio-desc;
    document.write("Total= $"+Total);
    break;

    case "plata": 
    desc=((precio*10)/100)
    Total=precio-desc;
    document.write("Total= $"+Total);
    break;

    case "oro": 
    desc=((precio*20)/100)
    Total=precio-desc;
    document.write("Total= $"+Total);
    break;

    case "platino": 
    desc=((precio*25)/100)
    Total=precio-desc;
    document.write("Total= $"+Total);
    break;
   
default: 
    document.write("Cupon no valido ");
    break;
}
/*   ``` litera strings - planillas literales */
let nombre = "Josue";
console.log("hola");
console.log('hola');
console.log(`hola yo soy ${nombre} y mi edad es ${2022-2000}`); 
/*Operador ternario (operador elvis)*/


/* if simplificado  */
/* Condicion ? en caso de ser verdad: en caso de ser falso  */
let edad =18;
edad ==18;
let mensaje = (edad >= 18)
     ?"es mayor de edad"
     : "tas chiquito ";
console.log(mensaje);
console.log(`Yo soy Josue y soy ${edad >=18 ? " Soy mayor de edad " :"Soy menor de edad" }`);
