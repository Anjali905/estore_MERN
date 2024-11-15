import React, { useContext, useEffect } from "react";
import styles from "./cartitem.module.scss";
import { ShopContext } from "../../Context/ShopContext";
const CartItem = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItemsFormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div
                className={`${styles.cartItemsFormatMain} ${styles.cartItemsFormat}`}
              >
                <img
                  src={e.image}
                  alt=""
                  className={styles.cartIconProductIcon}
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.cartItemsQuantity}>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className={styles.removeIcon}
                  src="../Assets/remove.png"
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.cartItemsDown}>
        <div className={styles.cartItemsTotal}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartItemsTotalItem}>
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartItemsTotalItem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartItemsTotalItem}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.cartItemsPromoCode}>
           <p>If you have a promo code, Enter it here </p>
            <div className={styles.promoBox}>
              <input type="text" placeholder="Enter promo code"/>
              <button>Submit</button>
              </div>
           </div>
      </div>
    </div>
  );
};

export default CartItem;
