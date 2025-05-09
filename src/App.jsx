import { useState } from 'react'
import './App.css'
// import Navbar from "./components/navbar"
import { Routes,Route } from 'react-router-dom'
import Home from "./components/home"
import Card from './components/card'
import Corusel from './components/corusel'
import Search from './components/search'
import Addedcart from './components/addedcartlist'
import AddedWishlist from './components/addedwishlist'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/cartlist" element={<Addedcart />} />
          <Route path="/wishlist" element={<AddedWishlist />} />
          <Route path='/card/:id' element={<Card/>} />
        </Routes>
    </>
  )
}

export default App