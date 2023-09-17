import React from 'react'

/**
* @author
* @function ToppingDrink
**/

const ToppingDrink = ({ chooseTopping }) => {
  return (
    <div>
      <p>Topping</p>
      <div className='d-flex flex_wrap'>
        <div className='product__info__item__list__topping' onClick={() => chooseTopping('0')}>Kem Phô Mai Macchiato + 10.000đ</div>
        <div className='product__info__item__list__topping' onClick={() => chooseTopping('1')}>Shot Espresso + 10.000đ</div>
        <div className='product__info__item__list__topping' onClick={() => chooseTopping('2')}>Trân châu trắng + 10.000đ</div>
        <div className='product__info__item__list__topping' onClick={() => chooseTopping('3')}>Sốt Caramel + 10.000đ</div>
        <div className='product__info__item__list__topping' onClick={() => chooseTopping('4')}>Thạch Cà Phê + 10.000đ</div>
        <div className='product__info__item__list__topping' onClick={() => chooseTopping('5')}>Thạch Oloong nướng + 10.000đ</div>
      </div>
    </div>
  )
}

export default ToppingDrink;