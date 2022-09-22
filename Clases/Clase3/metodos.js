//arreglos
//map
const numeros = [1,2,3,4,5];
const nuevoArreglo = numeros.map((elm)=>elm*2);
console.log(numeros, nuevoArreglo)

//find
const numeroMayor3 = numeros.find((elm)=>elm>3);
console.log(numeroMayor3)
const personas = [{nombre:"maria", age:20},{nombre:"pedro", age:30}]
const maria = personas.find((elm)=>elm.nombre === "maria");
console.log(maria)

//filter
const numerosB = [1,2,3,4,5];
const numerosMayores3 = numerosB.filter((elm)=>elm===5);
console.log(numerosMayores3)