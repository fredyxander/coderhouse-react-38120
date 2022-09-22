const persona = {
    name:"pepe",
    lastname:"mora",
    age:20,
}

// const newPerson = {
//     name: persona.name,
//     age: persona.age,
//     city:"bogota"
// }
const newPerson = {
    ...persona,
    city: "bogota",
    id:1
}

console.log("newPerson",newPerson);

//arreglos
const arreglo1 = [1,2,3];
const arreglo2 = arreglo1;
arreglo2.push(4);
const arreglo3 = [...arreglo1, 4, 5, 6];
arreglo3.push("a");
console.log("arreglo1", arreglo1);
console.log("arreglo2", arreglo2);
console.log("arreglo3", arreglo3);