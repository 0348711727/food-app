import React from 'react'
import { Footer, Header } from '../../Pages';
import { Outlet } from 'react-router-dom';

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
    </div>
  )
}

export default Layout;