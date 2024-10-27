import React from 'react'
import styles from './Offers.module.scss'
const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
        </div>
      <div className={styles.offersRight}>
      <img src='./Assets/exclusive_image.png'/>
      </div>
    </div>
  )
}

export default Offers
