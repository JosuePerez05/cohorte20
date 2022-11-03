let matriza = [
    [2, 5, 6], 
    [5, 9, 7],
    [6, 4 ,3]

];

let matrizb = [
    [5, 3, 2],
    [8, 5, 4],
    [1, 4, 9]


];
let res=[[],[],[]];

for (let fila = 0; fila <=2; fila++){
    for(let columna=0; columna<=2; columna++ ){

    res=(matriza[fila][columna]*matrizb[columna][fila])
    console.log(res) 
    }
   
}
