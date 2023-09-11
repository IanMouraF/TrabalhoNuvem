import React from 'react'
import Header from './components/header'
import About from './components/About'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import NavIcon from './components/NavIcon'

export default function App() {
  return (
    <div className='font-poppins bg-back'>
    <Header />
    <NavIcon />
    <Home />
    <About />
    <Menu />
    <Cart />
    <Contact />
    <Footer />

    </div>
  )
}
