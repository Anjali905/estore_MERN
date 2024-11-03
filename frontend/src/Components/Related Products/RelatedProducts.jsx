import React from 'react'
import styles from './relatedproducts.module.scss'
import data_product from "../../Assets/data"
import Item from '../Items/Item'
const RelatedProducts = () => {
  return (
    <div className={styles.relatedProducst}>
      <h1>Related Products</h1>
      <hr/>
      <div className={styles.relatedProductsItem}>
      {data_product.map((item, index)=>{
        return  <Item key={index} id = {item.id} name={item.name} image= {item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
      </div>
    </div>
  )
}

export default RelatedProducts
