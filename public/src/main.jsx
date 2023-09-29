import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import PaginaGerenciamento from './components/PaginaGerenciamento/PaginaGerenciamento'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App/>} />
      <Route path='/gerenciamento' element={<PaginaGerenciamento/>} /> 
    </Routes>
  </BrowserRouter>,
)
