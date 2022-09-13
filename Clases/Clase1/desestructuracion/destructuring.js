const numeros = [6,3,7,2];
const primero1 = numeros[0];
const segundo1 = numeros[1];

const [ primero, segundo,tercero,cuarto] = numeros;
console.log(segundo)

//objetos
const persona = {
    name:"pepe",
    age:23,
    city:"Buenos Aires"
}

const edad = persona.age;

const {name, city: ciudad} = persona;
console.log(name, ciudad)

const location = "ubicacion:" + ciudad