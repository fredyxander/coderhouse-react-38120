const numeros = [1,2,3,4,5];
const [primero,segundo, ...rest] = numeros;
console.log(primero);
console.log(segundo);
console.log(rest)
const newNumeros = [segundo, primero, ...rest]
console.log(newNumeros)

//funciones
function suma(num1,num2,...rest){
    console.log(rest)
}
suma(1,2,3,4,5,6,7)