const numeros = [1,2,3,4];
const letras = ["a","b","c"];
[1,2,3,4,"a","b","c"]

// const nuevoArreglo = numeros.concat(letras);
const newArray = [...numeros, ...letras, "p"]
console.log(newArray)

console.log([...numeros,9, 10, "p","i"])
console.log(numeros)

//objetos
const persona = {
    name:"pepe",
    age:20
}
const newPersona={
    ...persona,
    city:"buenos aires"
}

console.log(persona)
console.log(newPersona)

//copias
const arreglo1 = [1,2,3];
const arreglo2 = [...arreglo1];
arreglo2.push(5);
console.log(arreglo1);
console.log(arreglo2);