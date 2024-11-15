import React, { useContext } from 'react'
import styles from './Styling/shopcategory.module.scss'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Items/Item';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className={styles.shopCategory}>
      <img className={styles.shopCategoryBanner} src={props.banner} alt="" />
      <div className={styles.shopCategoryIndexSort}>
      <p>
      <span>Showing 1-12</span>out of 36 products</p>
      <div className={styles.shopCategorySort}>
      Sort by <img src='./Assets/dropdown_icon.png'/>
      </div>
      </div>
      <div className={styles.shopCategoryProducts}>
        {all_product.map((item, index)=>{
             if(props.category === item.category){
              return  <Item key={index} id = {item.id} name={item.name} image= {item.image} new_price={item.new_price} old_price={item.old_price}/>
             }else{
              return null;
             }
        })}
      </div>
      <div className={styles.shopCategoryLoadMore}>
      Explore More
      </div>
    </div>
  )
}

export default ShopCategory
