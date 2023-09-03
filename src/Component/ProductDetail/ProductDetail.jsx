import React from 'react'
import "./product-detail.css";
import Drink from '../Drink/Drink';
/**
* @author
* @function ProductDetail
**/

const ProductDetail = (props) => {
  return (
    <div className='product_detail'>
      <Drink />
    </div>
  )
}

export default ProductDetail;