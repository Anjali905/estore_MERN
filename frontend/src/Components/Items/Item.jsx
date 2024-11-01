import React from 'react'
import styles from './item.module.scss'
const Item = (props) => {
  return (
    <div className={styles.Item}>
      <img src={props.image} alt=''/>
      <p>{props.name}</p>
      <div className={styles.itemPrices}>
      <div className={styles.itemPriceNew}>
       ${props.new_price}
      </div>
      <div className={styles.itemPriceOld}>
      {props.old_price}
      </div>
      </div>
    </div>
  )
}

export default Item