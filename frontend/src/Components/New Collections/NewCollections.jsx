import React, { useEffect, useState } from 'react'
import styles from './newCollections.module.scss'
import Item from '../Items/Item.jsx'
const NewCollections = () => {
  const[newCollection,setNewCollections]= useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/newcollection')
    .then((res)=>res.json())
    .then((data)=>setNewCollections(data));
  },[])
  return (
    <div className={styles.newCollections}>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className={styles.collections}>
        {newCollection.map((item, index)=>[
          <Item key={index} id = {item.id} name={item.name} image= {item.image} new_price={item.new_price} old_price={item.old_price}/>
        ])}
      </div>
    </div>
  )
}

export default NewCollections
