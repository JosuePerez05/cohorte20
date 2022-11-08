const titulo = document.getElementById('titulo')
const parrafos=document.getElementsByClassName('parrafos');

titulo.textContent ="hola"
parrafos[0].innerHTML="Soy un parraafo"
console.log(titulo.textContent);
console.log(parrafos[1].textContent);

// css background-color --snake case
// js backgroundColor -- CamelCase
/* parrafos[1].style.color ="red"
parrafos[1].style.backgroundColor="yellow"; */
 parrafos[1].classList.add('coloresFeos')

 //Crear elementos HTML

 const padre=document.getElementById('padre');
 const enlace=document.createElement("a");
enlace.href = 'https://www.google.com';
enlace.textContent ="ir a google";

/* 
 document.body.appendChild(enlace) ;//appendChild agrega al final de la pagina 
 console.log(document.body); */
/* 
 document.body.insertAdjacentElement("",enlace); */
 
 padre.appendChild(enlace);
 
 console.log(enlace);