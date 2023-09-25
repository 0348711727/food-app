import React from 'react'
import { Footer, Header } from '../../Pages';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <div className='body'>
      <Header />
      <div className='outlet_style'>
        <Outlet />
      </div>
      <Footer />
      <Cart />
    </div>
  )
}

export default Layout;