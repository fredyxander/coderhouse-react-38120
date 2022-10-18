import './App.css';
import React,{useState} from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemDetailContainer} from "./components/Desafios/ItemDetailContainer/ItemDetailContainer";
import {ContactoPage} from "./components/Desafios/ContactoPage/ContactoPage";
import {EventosDefault} from "./components/Desafios/EventosDefault/EventosDefault";
import { PaginaContexto } from './components/Temas/PaginaContexto/PaginaContexto';
import { CustomProvider } from './context/CartContext';

const MostrarImagen = React.memo(()=>{
  console.log("MostrarImagen renderizado");
  return(
    <img src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc" alt='ejemplo'/>
  )
})

const MostrarTitulo = ({title})=>{
  console.log("MostrarTitulo renderizado");
  return(
    <p>{title}</p>
  )
}

function App() {
  const [state, setState] = useState("titulo inicial");

  const changeState = ()=>{
    setState("nuevo titulo")
  }

  return (
    <CustomProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <MostrarImagen/>
            <MostrarTitulo title={state}/>
            <button onClick={changeState}>cambiar variable estado</button>
          </div>
        </div>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
