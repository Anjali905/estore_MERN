import React from 'react'
import styles from './navbar.module.scss'
import NavLogo from '../../assets/nav-logo.svg'
import NavProfile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={NavLogo} alt='' className={styles.navLogo}/>
       <img src={NavProfile} alt="" className={styles.navProfile} />
      </div>
  )
}

export default Navbar
