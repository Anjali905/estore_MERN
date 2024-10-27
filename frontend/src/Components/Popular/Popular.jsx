import React from 'react'
import styles from './popular.module.scss'
import data from '../../Assets/data.js'
import Item from '../Items/Item.jsx'

const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className={styles.popularItem}>
      {data.map((item, index)=>{
        return <Item key={index} id = {item.id} name={item.name} image= {item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
      </div>
    </div>
  )
}

export default Popular
