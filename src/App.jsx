import Navbar from './components/Navbar'

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='px-4 sm:px-[5w] md:px-[7vw] lg:px-[9w]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
