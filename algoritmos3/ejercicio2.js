/*crea un archivo llamado ejercicio2.js
cada comando debe mostrarse en consola*/

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1Escribe un comando para remover a "Dani" del arreglo
personas.splice(1, 1);
console.log(personas);
//2Escribe un comando para remover a "Juan del arreglo"
personas.splice(2, 1);
console.log(personas);
//3Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.splice(1, 1);
personas.unshift("Luis");
console.log(personas);
//4Escribe el comando para agregar tu nombre al final del arreglo
personas.push("Josue");
console.log(personas);
//5Escribe el comando para mostrar la posición de "Maria"
console.log(personas.indexOf("Maria"));

//indexOf()

//6Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf("Josue"));
