let hora =Number(prompt("Ingrese la hora"));
if ((hora<=5) && (hora >= 0)){
    document.write("Dejame dormir >:o ");
}
else if( (hora<=11) && (hora >= 6) ){
    document.write("Buenos Dias :)");//document.write inserta algo dentro de la pagina educativo
}else if((hora<=18) && (hora >= 12)){
    document.write("Buenas tardes :)");
}else if((hora<=23) && (hora >= 19)){
    document.write("Buenas noches :)");

}
else {
    document.write("Esa hora no es valida");
}