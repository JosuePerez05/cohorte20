let cadena =prompt("Ingrese el nombre");
cadena=cadena.toLowerCase();
const invertirCadena= cadena =>cadena.split("").reverse().join("");
console.log("Cadena;",invertirCadena(cadena));