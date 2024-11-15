import React, { useEffect ,useState} from 'react'
import styles from './popular.module.scss'
import data from '../../Assets/data.js'
import Item from '../Items/Item.jsx'

const Popular = () => {
  const[popular,setPopular]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popularwomen')
    .then((res)=>res.json())
    .then((data)=>setPopular(data));
  },[])
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className={styles.popularItem}>
      {popular.map((item, index)=>{
        return <Item key={index} id = {item.id} name={item.name} image= {item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
      </div>
    </div>
  )
}

export default Popular
