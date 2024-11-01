import React from 'react'
import styles from './newCollections.module.scss'
import new_collections from '../../Assets/new_collections.js'
import Item from '../Items/Item.jsx'
const NewCollections = () => {
  return (
    <div className={styles.newCollections}>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className={styles.collections}>
        {new_collections.map((item, index)=>[
          <Item key={index} id = {item.id} name={item.name} image= {item.image} new_price={item.new_price} old_price={item.old_price}/>
        ])}
      </div>
    </div>
  )
}

export default NewCollections
