import React from 'react'
import styles from './descriptionbox.module.scss'
const DescriptionBox = () => {
  return (
    <div className={styles.descriptionBox}>
      <div className={styles.descriptionBoxNavigator}>
        <div className={styles.descriptionBoxNavBox}>
        Description
        </div>
        <div className={`${styles.descriptionBoxNavBox} fade`}>
        Reviews {122}
        </div>
        <div className={styles.descriptionBoxDescription}>
       <p>Ecommerce Website is a one-stop online destination offering a seamless shopping experience with a diverse range of products. From the latest fashion trends to essential home goods, our platform ensures quality, competitive pricing, and fast shipping, all backed by excellent customer service to make your shopping journey easy and enjoyable.</p>
       <p>Ecommerce Website provides a comprehensive online shopping experience, featuring an extensive selection of products from fashion to home essentials. We prioritize quality, affordability, and prompt delivery, all while offering top-notch customer support to ensure your shopping is convenient and enjoyable</p> 
       </div>
      </div>
    </div>
  )
}

export default DescriptionBox
