import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {CardUser} from "./components/CardUser/CardUser";
import {Users} from "./components/Users/Users";

function App() {
  const [products, setProducts] = useState([]);

  const productos = [
    {id:1, name:"camisa",stock:10},
    {id:2, name:"sombrero",stock:20},
    {id:3, name:"pantalon",stock:5},
  ]

  const obtenerProductos = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    })
  }

  useEffect(()=>{
    //llamados a apis o servicios de backend.
    obtenerProductos().then((result)=>setProducts(result))
  },[])

  const users =[
    {id:1,name:"pedro"},
    {id:2,name:"mario"},
    {id:3,name:"pablo"},
    {id:4,name:"Franco"},
    {id:5,name:"Felipe"},
    {id:6,name:"Inti"},
  ]

  return (
    <div className="App">
      {/* <CardUser nombreUsuario="juanito"/>
      <CardUser nombreUsuario="mario Alberto"/>
      <CardUser userName="pedro"/>
      <CardUser userName="karen"/> */}
      {/* {
        users.map(element=>{
          return(
            <CardUser userName={element.name}/>
          )
        })
      } */}
      <Users usuarios={users}/>
    </div>
  );
}

export default App;
