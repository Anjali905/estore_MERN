import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import ProductDisplay from '../Components/Product Display/ProductDisplay'
import DescriptionBox from '../Components/Description Box/DescriptionBox'
import RelatedProducts from '../Components/Related Products/RelatedProducts'
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
     <RelatedProducts/> 
     </div>
  )
}

export default Product
