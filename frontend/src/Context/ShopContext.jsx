import React, { createContext } from "react";
import all_product from "../Assets/all_product";

//filters men , women and kids categories into separate pages
//create context
export const ShopContext = createContext(null);
export const ShopContextProvider = (props)=>{
    const contextvalue={all_product}
    console.log(contextvalue);
    return(
        <ShopContext.Provider  value={contextvalue}>
        {props.children}
        </ShopContext.Provider>
    )
}
