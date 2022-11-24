//import {indexTest } from "../calculadora";// con babel 
//const indexTest= require("../calculadora") // con requiere
test ("test suma ",() =>{
    const r = indexTest.suma(5,1) //evalua la funcion 
    expect (r).toBe(12) // le doy el resultado que quiro que compara para que sea correcto 

} );
test.todo('test de suma');
test.todo('test de mult');
test.todo('test de divi');