/*
- ECMASCRIPT - ES6
- DOM: Document Object Model
- protoype

Numericos
1
10 + 5
10 - 5


String (Cadena)
"Hola Mundo"
'Hola Javascript'
`Hola Mundo ${1+5}`

Boolean (Lógicos)
true
false

*/

// Variables
var saludo = "Hola Mundo";
var nombre = 'Erik';
var total = 11;

var completo = `Mensaje Completo: 
${1 + total}
${saludo}
${nombre}`;

var esmayor = 10 >= 5;


var arreglo1 = [1, 2, 3, 4];
console.log(arreglo1[3]);

var alumnos = ["Hugo", "Paco", "Luis"];
console.log(alumnos[1]);

console.log(esmayor);
console.log(completo);


var persona = {
    edad: 17,
    nombre: "John Resig",
    "año": 1998
}
console.log(persona.nombre)

console.log(persona.edad)
persona.edad = 18;
console.log(persona.edad)

console.log(persona["año"])
console.log(persona);

function saludar(mensaje){
    var nombre = prompt(mensaje);
    alert(`Bienvenido ${nombre}!`)
}

saludar("Cual es el nombre de tu mamá?")

