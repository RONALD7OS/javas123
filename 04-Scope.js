//scope global
var nombre="jairo"

function saludo(){
    var apellido ="gomez"
    console.log(`dentro de la funcion ${nombre}`);
    return 0;
}

console.log(saludo());
console.log(`fuera de la funcion  ${nombre}`);




//sope local

var nombre1="miguel"
function saludo(){
    var apellido1="gomez"
    console.log(`fuera de la funcion ${apellido1}`);
    return 0;
}
console.log(saludo());
console.log(`fuera de la funcion local ${apellido1}`);