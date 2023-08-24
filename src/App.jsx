import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className=''>
      <div>
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      

    </div>


  )
}

export default App