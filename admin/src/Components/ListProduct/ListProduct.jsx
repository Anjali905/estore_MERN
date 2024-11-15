import React, { useEffect,useState } from 'react'
import styles from './listproduct.module.scss'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [all_products, setAll_products] = useState([]);
 
  useEffect(()=>{
    fetchInfo();
  },[])
  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAll_products(data);
      });
    
      const data = await response.json();
      setAll_products(data);
    } catch (error) {
      console.error(error);
    }
  }
  const removeProduct = async (id) => {
    try {
     const response = await fetch(`http://localhost:4000/removeproduct`, {
        method: 'POST',
        headers: {
          Accept:'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      if (response.ok) {
        await fetchInfo();
      } else {
        console.error('Failed to remove product');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.listProduct}>
      <h1>All Products List</h1>
      <div className={styles.listProductFormatMain}>
       <p>Products</p>
       <p>Title</p>
       <p>Old Price</p>
       <p>New Price</p>
       <p>Category</p>
       <p>Remove</p>
      </div>
      <div className={styles.listProductAllProducts}>
      <hr/>
      {all_products?.map((item, index) => {
        return (
          <>
          <div className={`${styles.listProductFormatMain} ${styles.listProductFormat}`} key={index}>
           <img src={item.image} alt=""  className={styles.listProductImage}/>
          <p>{item.name}</p>
          <p>${item.old_price}</p>
          <p>${item.new_price}</p>
          <p>{item.category}</p>
          <img onClick={()=>removeProduct(item.id)} src={cross_icon} className={styles.removeIcon}alt="" />
           </div>
           <hr/>
           </>
        );
      })}

      </div>
    </div>
  )
}

export default ListProduct
