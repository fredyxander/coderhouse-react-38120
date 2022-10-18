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

function App() {

  return (
    <CustomProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/contacto" element={<EventosDefault/>}/>
              <Route path="/ejemplo-contexto" element={<PaginaContexto/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
