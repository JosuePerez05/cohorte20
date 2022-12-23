
let num1 = (prompt("ingrese el primer numero"));
let num2 = (prompt("ingrese el segundo numero"));
let num3 = (prompt("ingrese el tercer numero"));
function comparacionMayor(){
    if (num1>=num2 && num1>=num3 && num2>=num3){
        console.log("Los numeros son iguales");
        
        }
    else if(num1>=num2 && num1 >=num3 && num2<=num3){
            console.log(num1+","+num3 +","+ num2);
           

    }else if(num2<=num1 && num2>=num3 && num1>=num3){
            console.log(num2+","+num1+","+num3);
          
    }else if(num2<=num1 && num2>=num3 && num1<=num3){
            console.log(num2+","+num3+","+num1);
           
    }else if (num3>=num1 && num3>=num2 && num2>=num1){
        console.log(num3+","+num2+","+num1);
        
    }else if (num3>=num1 && num3>=num2 && num1>=num2){
        console.log(num3+","+num1+","+num2);
        

    }

}
comparacionMayor();

function comparacionMenor(){
    if (num1<=num2 && num1<=num3 && num2<=num3){
        console.log(num1+","+num2+","+num3);
        
        }
    else if(num1<=num2 && num1 <=num3 && num3<=num2){
            console.log(num1+","+num3+","+num2);
        

    }else if(num2<=num1 && num2<=num3 && num1<=num3){
            console.log(num2+","+num1+","+num3);
        
    }else if(num2<=num1 && num2<=num3 && num3<=num1){
            console.log(num2+","+num3+","+num1);
        
    }else if (num3<=num1 && num3<=num2 && num2<=num1){
        console.log(num3+","+num2+","+num1);
        
    }else if (nun3<=num1 && num3<=num2 && num1<=num2){
        console.log(num3+","+num1+","+num2);
        

    }

}
comparacionMenor();