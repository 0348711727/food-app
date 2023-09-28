import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import './cart.css';
/**
* @author
* @function Cart
**/

const Cart = (props) => {
  const cart = useSelector(state => state.cart.data);
  return (
    <div className='cart'>
      <p className='item_in_cart'>{cart.reduce((current, obj) => obj.quantity + current, 0)}</p>
      <ShoppingCartOutlined style={{ fontSize: '24px' }} />
    </div>
  )
}

export default Cart;