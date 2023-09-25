import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react'

/**
* @author
* @function Cart
**/

const Cart = (props) => {
  return (
    <div className='cart'>
      <ShoppingCartOutlined style={{ fontSize: '24px' }} />
    </div>
  )
}

export default Cart;