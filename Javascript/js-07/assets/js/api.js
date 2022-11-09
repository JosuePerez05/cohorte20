
/* 
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 00);
const baz = () => console.log("Third");

bar();
foo();
baz(); */
//servidor
const nombre = () => {
    const nombres = ["Pepe", "Pancho", "María"];
    /* setTimeout(() => {
        return nombres;
    }, 0); */

    return new Promise((resolve, reject) => { //resolve -- proceso exitoso
        setTimeout(() => {
                                //reject -- proceso no exitoso
           if(false){
            resolve(nombres);
           }else{
            reject("No hay nombres");
           }
           
        }, 3000)
    });

}

//servidor

/*
nuestra pc
*/
// console.log(nombre()[0])
/* nombre().
then(nombres => console.log(nombres))
.catch(error => console.warn(error)); */

//.forEach((elemento)=>{});




//async --await 
/* async function obterNombre (){

} */

/* const obtenerNombre=async()=>{
    let nombres= await nombre();
    console.log(nombres);
} */
const obtenerNombre=async()=>{
    try{
        let nombres =await nombre();
        console.log(nombres);

    }catch (error){
        alert(error);
    }
}

// obtenerNombre();












/* const url= 'https://pokeapi.co/api/v2/pokemon/';

const pokedex =() => {
    fetch(url)
        .then((datos)=> datos.json())
        .then((pokemon) => { console.log(pokemon)})
        .catch(error=>console.log(error))
};

pokedex();
 */
const cartaPokemon =document.getElementById('pokemon');
const nombrePokemon = document.getElementById ('nombre');
const imagen= document.getElementById('img');
const form=document.getElementById('form');

const pokedex = async (numero) => {
    try{
        const url= `https://pokeapi.co/api/v2/pokemon/${numero}
        `;
        const respuesta= await fetch(url);
        const pokemon = await respuesta.json();
        console.log(pokemon.name);

        const datos={
            nombre :pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default

        }

       console.log(pokemon.sprites.other['official-artwork'].front_default);
        nombrePokemon.textContent =datos.nombre
        imagen.innerHTML=`
        <img src="${datos.imagen}"width="250" alt="imagen de ${datos.nombre} "/>
        `
    }catch (error){

    }
}



//manejar eventos
form.addEventListener('submit',(evento)=>{
    //codigo a ejecutarse 
    evento.preventDefault();

  /*   console.log(evento.target);
    evento.preventDefault();//Guarda el valor del evento  */
    const valor=document.getElementById('idP').value;
    console.log(valor);


    pokedex(valor);
    form.reset();
});
