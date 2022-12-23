import React, { Fragment } from "react"

const Micomponente = ()=>{
    let nombre = "Peter";
    let web ="generetion.org";
    let apellido="Parker";
    let usuario = {
        nombre :"Bruce",
        apellido:"Baner"
    }
    return (

 <>
  <header>
    <h1>Componente creado</h1>
    <p>Holo desde un componente en react </p>
    <ul>
        <li >nombre:{nombre}</li>
        <li>apellido:{apellido}</li>
        <li>web.{web}</li>
        <li><em>Hola</em> <strong> {usuario.nombre} {usuario.apellido}</strong></li>
        {/*<li><strong>{JSON.stringify}</strong></li>*/}
   
    </ul>
    <p><strong>HOLA</strong></p>
    <a href="https://www.youtube.com/?themeRefresh=1">YouTube</a>
  </header>
 </>    
 
 );
    }
export default Micomponente
{/*
    Comentario en react 
 Formas de encapsular = <></><Fragment></Fragment><div></div>
*/}