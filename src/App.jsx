import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App
