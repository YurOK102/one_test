import React from 'react'

import './ProductName.css'

const ProductName = ({ data }) => {
   return (
      <>
         <h1 className="product-name">{data.productName}</h1>
         <h2 className="product-name-discription">{data.productNameDiscription}</h2>
      </>
   )
}

export default ProductName
