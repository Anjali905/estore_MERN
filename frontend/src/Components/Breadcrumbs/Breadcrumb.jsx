import React, { useEffect } from 'react'
import styles from './breadcrumb.module.scss'

const Breadcrumb = (props) => {
    const product = props.product;
   
  return (
    <div className={styles.breadcrumb}>
      HOME <img src='../Assets/breadcrum_Arrow.png'/> SHOP   <img src='../Assets/breadcrum_Arrow.png'/> {product.category}  <img src='../Assets/breadcrum_Arrow.png'/> SHOP   <img src='../Assets/breadcrum_Arrow.png'/> {product.name}
    </div>
  )
}

export default Breadcrumb
