import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from '../Components/Footer/Fotter'

const Main = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Fotter/>
    </>
  )
}

export default Main
