import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactoPage } from './components/Desafios/ContactoPage/ContactoPage';
import {ItemDetailContainer} from "./components/Desafios/ItemDetailContainer/ItemDetailContainer"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar/>
          {/* <ItemListContainer/> */}
          <Routes>
            <Route path="/inicio" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<ContactoPage/>}/>
            {/* <Route path="/ropa/camisas" element={<ItemListContainer/>}/>
            <Route path="/ropa/sombreros" element={<ItemListContainer/>}/> */}
            <Route path="/ropa/:categoryName" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          </Routes>
          <footer>derechos reservados</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
