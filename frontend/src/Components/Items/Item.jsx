import React from 'react'
import styles from './item.module.scss'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className={styles.Item}>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
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