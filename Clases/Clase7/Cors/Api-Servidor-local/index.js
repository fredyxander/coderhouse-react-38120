const express = require('express');
let ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

//crear app con express
const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // colocar esta instruccion para que pueda ser llamada por localhost:3000
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//permite leer en formato json de la peticion
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/ingredients', (req, res) =>{
    const {user} = req.body;
    ingredients = [...ingredients, {id:(ingredients.length+1).toString(), item:user.item}];
    console.log('newArray', ingredients)
    res.send(ingredients);
});

app.get('/ingredients', (req, res) =>{
    res.send(ingredients);
});

app.listen(6069, ()=>{
    console.log("corriendo en puerto 6069")
});