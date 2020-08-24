import React from 'react'

import './ProductPortions.css'

const ProductPortions = ({ data }) => {
   return (
      <>
         <div className="product-portions">{data.productPortions}</div>
         <div className="product-portions">{data.productPresent}</div>
         <div className="product-portions">{data.customer}</div>
      </>
   )
}

export default ProductPortions;
