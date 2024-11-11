import React from 'react'
import styles from './sidebar.module.scss'
import { Link } from 'react-router-dom';
import add_product from '../../assets/Product_Cart.svg'
import list_product from '../../assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className={styles.sidebarItem}>
        <img src={add_product} alt=''></img>
        <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className={styles.sidebarItem}>
        <img src={list_product} alt=''></img>
        <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar
