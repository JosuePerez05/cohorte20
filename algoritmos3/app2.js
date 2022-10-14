//Propiedad de arreglos 
// length

const frutas = ["🍐", "Manzana","Guayaba","Plátano" ];
console.log(frutas);

console.log(frutas.length);


// Metodos-acciones
//push() Agrega al final
frutas.push("Sandia","Limon");
console.log(frutas);
//unshift()//Agrega un elemento al inicio del arreglo
frutas.unshift("Guanábana")
console.log(frutas);
//Metodos para quitar
//pop() Remueve el ultimo dato de un array,lo puede guardar dentro de una variable
frutas.pop();
console.log(frutas);
let elemento=frutas.pop();
console.log(frutas);
console.log(elemento);

//shifht()
let elemento2=frutas.shift();
console.log(frutas);
console.log(elemento2);


//indexOf regresa el primer elemnto que encuentra, si esta o no esta y si esta medice en que posicion 
console.log(frutas.indexOf("Manzana"));
console.log(frutas.indexOf("Plátano"));

//reverse() Poner los datos alrevez 
/*Si quieres hacerle reverse a un arreglo i
nterno sería arreglo[i].reverse()*/
frutas.reverse();
console.log(frutas);

frutas.reverse();
console.log(frutas);


//sort() ordenar de manera alfabetica
/*funciona mejor con palabras  toma en cuenta el primer digito */
frutas.sort();
console.log(frutas);

const numeros =[4,567,2,4566,45,78,1];
//funcion callback 
numeros.sort((a,b) => a - b);//acomoda los numeros de menor a mayor 

console.log(numeros);


