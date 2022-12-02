// Escribe tu código aquí.
let ul= document.getElementById('ul')
let myArr =['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
let palabra='bocina'
let newArr=[];


function prueba (palabra, myArr){
for (i=0; i>=myArr.length; i++){
    if(pmyArr[i].length>palabra.length){
        newArr.push(myArr[i])
    }
}
prinlist(arrN)
}
function printlist(arr){
    for (let i=0; i<arr.length; i++){
        ul.innerHTML+=`<li>${arr[i]}</li>`
    }
}
prueba(palabra,myArr)