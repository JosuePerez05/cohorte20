//objeto literal--> 
let persona={
    nombre :'juan',
    apellido:'Perez',
   nombreCompleto:function(){
      return 'El nombre es '+ this.nombre + ' ' + this.apellido ;
    }
 }
    /*for (nombrePropiedad in persona){
        console.log(nombrePropiedad);
        console.log('valor'+persona[nombrePropiedad]);    
    } */

//<--Objeto literal



console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona[`apellido`]);
persona.tel='5512345678'
console.log(persona);
console.log(persona.tel);
delete persona.tel;
delete persona.nombreCompleto
console.log(persona);
let personaArreglo=Object.values(persona);
console.log(personaArreglo);
let personaString=JSON.stringify(persona);
console.log(personaString);


/* let persona1= new Object();

persona1.edad =23;
console.log(persona1.edad);4 */