import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemDetailContainer} from "./components/Desafios/ItemDetailContainer/ItemDetailContainer";
import {ContactoPage} from "./components/Desafios/ContactoPage/ContactoPage";
import {EventosDefault} from "./components/Desafios/EventosDefault/EventosDefault";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/contacto" element={<EventosDefault/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
