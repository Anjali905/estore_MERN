import React, { useContext, useRef, useState } from 'react'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const[menu,setMenu] = useState("shop")
    const{getTotalCartItem} = useContext(ShopContext);
    const menuRef =  useRef();
    const dropdown_toggle = (e)=>{
      menuRef.current.classList.toggle(`${styles.navMenuVisible}`);
      e.target.classList.toggle(`${styles.open}`);
    }
  return (
    <div className={styles.Navbar}>
      <div className={styles.navLogo}>
      <img src='/Assets/logo.png' alt=''/>
      <p>SHOPPER</p>
      </div>
      <img className={styles.navDropdown} src='../Assets/nav_dropdown.png' alt='' onClick={dropdown_toggle}/>
      <ul ref={menuRef} className={styles.navmenu}>
      <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu === "shop" ? <hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu === "mens" ? <hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women</Link>{menu === "womens" ? <hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr/>:<></>}</li>
      </ul>
      <div className={styles.navLoginCart}>
      {localStorage.getItem("auth-token")
      ?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/login");}}>Logout</button>
      :<Link to="/login"><button>Login</button></Link>}
       <Link to="/cart"><img src='/Assets/cart_icon.png' alt=''/></Link>
      <div className={styles.cartCountNav}>{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar
