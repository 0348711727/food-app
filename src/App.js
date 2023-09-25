import './App.css';
import React from "react";
import { About, Coffee, ProductDetail, Home } from './Pages';
import { Layout } from './Component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from './Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='coffee' element={<Coffee />}></Route>
            <Route path='product/:id' element={<ProductDetail />}></Route>
            {/* <Route path='about' element={<About />}></Route>
            <Route path='about' element={<About />}></Route> */}

            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
