test ('object assigment',() =>{
    const data = {one: 1 }; //evalua la funcion 
    data ['two'] = 5;
   expect (data).toEqual({one: 1, two: 5}); // le doy el resultado que quiro que compara para que sea correcto 

} );