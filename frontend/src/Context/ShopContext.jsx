import React, { createContext, useEffect, useState } from "react";

//Context API
//create context
export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index <= 300 + 1;index++){
        cart[index]= 0
    }
    return cart;
}
export const ShopContextProvider = (props)=>{
    const[cartItems,setCartItems]= useState(getDefaultCart());
     const[all_product,setAllProduct]= useState([]);
     useEffect(()=>{
fetch('http://localhost:4000/allproducts')
.then((response)=>response.json())
.then((data)=> setAllProduct(data))
if(localStorage.getItem("auth-token")){
    fetch('http://localhost:4000/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token':`${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body:"",
        }).then((response) => response.json())
        .then((data) => {
          setCartItems(data);
        });
}
     },[])
    const addToCart = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+ 1}))
        if(localStorage.getItem("auth-token")){
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'auth-token':`${localStorage.getItem("auth-token")}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  "id": ItemId,
                })
                }).then((response) => response.json())
                .then((data) => {
                });
        }
    }
    const removeFromCart = (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]- 1}))
        if(localStorage.getItem("auth-token")){
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'auth-token':`${localStorage.getItem("auth-token")}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  "id": ItemId,
                })
                }).then((response) => response.json())
                .then((data) => {
            })
        }
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
