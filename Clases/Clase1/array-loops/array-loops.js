const numbers = [1,2,3,4]
//forEach
numbers.forEach(num=>console.log(num))

//map
const newArray = numbers.map(num=>num*2);
console.log("newArray-map", newArray) //newArray-map [ 2, 4, 6, 8 ]

//filter
const arrayFiltered = numbers.filter(num=>num>=3);
console.log("arrayFiltered",arrayFiltered) //arrayFiltered [ 3, 4 ]

//some
const someResult = numbers.some(num=>num>3);
console.log("someResult",someResult)//true
const someResult2 = numbers.some(num=>num>7);
console.log("someResult2",someResult2)//false

//find
const personas = [{name:"pepe"},{name:"maria"},{name:"rodrigo"}];
const rodrigo = personas.find(p=>p.name === "rodrigo");
console.log(rodrigo)//{name:"rodrigo"}

//finIndex
const mariaPos = personas.findIndex(p=>p.name === "maria")
console.log("pos: ", mariaPos) //pos: 1