import React from 'react'
import { Routes, Route, link } from "react-router-dom";
import Navbar from './container/Navbar';
import Home from './container/Home';
import Listado_Pokemon from './container/Listado_Pokemon';

function App() {
  return (
    <>
      <Navbar brand="Consumismo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Pokemones' element={<Listado_Pokemon />} />
      </Routes>
    </>
  );
}


export default App;
