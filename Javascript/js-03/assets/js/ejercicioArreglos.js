let cadena =prompt("Ingrese el nombre");
cadena=cadena.toLowerCase();
const invertirCadena= cadena =>cadena.split("").reverse().join("");
console.log("Cadena;",invertirCadena(cadena));
/* join separa de un array a un string 
    split divide un objeto de tipo String en un array
    reverse*/