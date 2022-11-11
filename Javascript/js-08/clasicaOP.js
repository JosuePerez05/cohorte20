class operacionesAritmeticas {
    numero0=0;
    numero1=0;
    constructor (valor0, valor1){
    this.numero0=valor0;
    this.numero1= valor1;

    }
    /*function*/sumar (a,b){
        return a+b;

    }

    set numero0(num0){
        this.numero0 =num0 ;// this accede al miembro de dato de la clase atraves del contructor y de los datos 


    }
    set numero1(num1){
        this.numero1 =num1;
    }
    get numero0(){
        return this.numero0
    }
    get numero1(){
        return this.numero1
    }

}









//declarar el objeto (objeto de forma clasica es la instancia,llamada peticion a lade una clase )
let obj1; 
obj1 =new operacionesAritmeticas(8,6)
console.log(obj1.numero0);
console.log(obj1.numero1);

console.log( 'obj1: '+ obj1.sumar(obj1.numero0,obj1.numero1));


let obj2= new operacionesAritmeticas();
obj2.numero0 = 8;
obj2.numero1 = 54;
console.log(obj2.numero0);

console.log( obj2.sumar(obj2.numero0,obj2.numero1));
/* clase define al objeto pero el objeto llama a la clase esta definido en la atraccion  */
