const persona = {
    name:"pepe",
    lastname:"mora",
    age:20,
}

// const nombre = persona.name;
const nuevaEdad = persona.age + 10;

const {lastname:apellido, city, name: nombre} = persona;
console.log(apellido, city)