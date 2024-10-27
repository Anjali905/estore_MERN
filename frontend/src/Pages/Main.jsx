import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Main