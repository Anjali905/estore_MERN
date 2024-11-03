import React, { useContext } from 'react'
import styles from './productdisplay.module.scss'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart}= useContext(ShopContext);
  return (
    <div className={styles.productDisplay}>
       <div className={styles.productDisplayLeft}>
         <div className={styles.productDisplayImageList}>
           <img src={product.image} alt=''/>
           <img src={product.image} alt=''/>
           <img src={product.image} alt=''/>
           <img src={product.image} alt=''/>
         </div>
         <div className={styles.productDisplayImage}>
         <img className={styles.productDisplayMainImg} src={product.image} alt=''/>
         </div>
       </div>
       <div className={styles.productDisplayRight}>
        <h1>{product.name}</h1>
        <div className={styles.productDisplayRightStars}>
        <img src='../Assets/star_icon.png' alt=''/>
        <img src='../Assets/star_icon.png' alt=''/>
        <img src='../Assets/star_icon.png' alt=''/>
        <img src='../Assets/star_icon.png' alt=''/>
        <img src='../Assets/star_dull_icon.png' alt=''/>
        <p>{122}</p>
        </div>
        <div className={styles.productDisplayRightPrices}>
          <div className={styles.productDisplayRightPriceOld}>
          ${product.old_price}
          </div>
          <div className={styles.productDisplayRightPriceNew}>
           ${product.new_price}
          </div>
        </div>
        <div className={styles.productDisplayRightDescription}>
        This shirt is crafted from premium, breathable fabric that combines comfort and durability, making it perfect for everyday wear.
        </div>
        <div className={styles.productDisplayRightSize}>
         <h1>Select Size</h1>
         <div className={styles.productDisplayRightSizes}>
         <div>S</div>
         <div>M</div>
         <div>L</div>
         <div>XL</div>
         <div>XXL</div>
        
         </div>
         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
         </div>
       
        <p className={styles.productDisplayRightCategory}><span>Category :</span>Women, T-Shirt, Crop top</p>
        <p className={styles.productDisplayRightCategory}><span>Tags :</span>Modern, latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
