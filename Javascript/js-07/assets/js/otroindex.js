//forma 1 

// 1.- Creae un elemento en html (llamar al elemento )

const imagen =document.getElementsByClassName('contenedor')[0];

console.log(imagen);


//2.- Crear el elemento 
const nuevaImg=document.createElement('img');

//3.-Modificar atributos 
nuevaImg.src="https://placeimg.com/200/200/nature";
nuevaImg.alt ="Imagen de naturaleza"

// 4.-Insertar el elemento 
imagen.appendChild(nuevaImg)

//1.-llamar elemento padre 
 const imagen2=document.getElementById('img')

 //2.- llamar a  propiedad 
 imagen2.innerHTML= `<img src="https://placeimg.com/200/200/animals" alt="imagen de animales"/>
 `;
 
 
 //Crear una lista apartir de los elementos guardados en un arreglo 
 const nombres=['pedro', 'juan', 'sonia','miguel'];
 const lista1=document.getElementById("lista1");
/*  const arreglo= document.getElementById('arreglo');
 const ul2= document.createElement("ul");
 arreglo.appendChild(ul2);
 for(let i=0; i<nombres.length; i++) {
    ul2.innerHTML+= `<li>${nombres[i]}</li>`
  } */
  nombres.forEach((el)=>{
    const li=document.createElement('li');
    li.textContent=el;
    lista1.appendChild(li);
  })
  const frutas =["Manzana"," limon","Pera", "Uva"];
  const lista2= document.getElementById ('lista2');
  frutas.forEach((el)=>{
    lista2.innerHTML +=`
    <li>${el} </li>
    
    `;
//"+="-->lista2= lista2+ <li>${el} </li>;

});

const animales=['perro','gato' ,'perico','tortuga'];
const lista3= document.getElementById('lista3');
animales.forEach((el)=>{
    lista3.innerHTML +=`
    <li>${el}</li>
    `
})