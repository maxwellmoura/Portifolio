import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//Componentes
import NavBar from './componets/NavBar/NavBar'
import Footer from './componets/Footer/Footer'
//Pages
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Linguagens from './pages/Linguagens/Linguagens'
import Projetos from './pages/Projetos/Projetos'


function App() {


  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='linguagens' element={<Linguagens />} />
        <Route path='/projetos' element={<Projetos />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
