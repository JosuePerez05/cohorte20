let arr = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8 ,9]

];
let contador=0;
/* while(contador<10){
    console.log(contador);
    contador = contador + 1;


} */
/* do{
    console.log(contador);
    contador ++;
 

}while (contador <= 10); {
    
} */

/* for (let fila = 0; fila <=2; fila++){
    for(let columna=0; columna<=2; columna++ ){

    console.log(arr [fila][columna] );
    }
    console.log("-----------------");
}
console.log("||||||||");
for (let i = 2; i >=0; i--){
    for(let j=2; j>=0; j-- ){

    console.log(arr [i][j] );
    }
    console.log("-----------------");
} */
/* 
let cadena="Josue Perez Neyra";
console.log(cadena.length); */
 
let fila =0;
while (fila <3) {
    for(let columna=0; columna<=2; columna++ ){

        console.log(arr [fila][columna] );
        }
        fila ++
        console.log("-----------------");
}