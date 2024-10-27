import React, { useState } from 'react'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const[menu,setMenu] = useState("shop")
  return (
    <div className={styles.Navbar}>
      <div className={styles.navLogo}>
      <img src='/Assets/logo.png' alt=''/>
      <p>SHOPPER</p>
      </div>
      <ul className={styles.navmenu}>
      <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu === "shop" ? <hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu === "mens" ? <hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women</Link>{menu === "womens" ? <hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr/>:<></>}</li>
      </ul>
      <div className={styles.navLoginCart}>
      <Link to="/login"><button>Login</button></Link>
       <Link to="/cart"><img src='/Assets/cart_icon.png' alt=''/></Link>
      <div className={styles.cartCountNav}>0</div>
      </div>
    </div>
  )
}

export default Navbar
