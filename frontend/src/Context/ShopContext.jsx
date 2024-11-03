import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";

//Context API
//create context
export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index <= all_product.length + 1;index++){
        cart[index]= 0
    }
    return cart;
}
export const ShopContextProvider = (props)=>{
    const[cartItems,setCartItems]= useState(getDefaultCart());
   
    const addToCart = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+ 1}))
     console.log("cart items",cartItems)
    }
    const removeFromCart = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]- 1}))
    }
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=> product.id === Number(item));
                totalAmount += itemInfo.new_price *cartItems[item];
            }
          
        }
        return totalAmount;
    }
    const getTotalCartItem = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    const contextvalue={all_product, cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItem};
    return(
        <ShopContext.Provider  value={contextvalue}>
        {props.children}
        </ShopContext.Provider>
    )
}
