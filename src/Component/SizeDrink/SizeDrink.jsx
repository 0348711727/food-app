import React from 'react'

/**
* @author
* @function SizeDrink
**/

const SizeDrink = ({ chooseSize }) => {
  return (
    <>
      <p>Chọn size(bắt buộc)</p>
      <div className='d-flex'>
        <div className='product__info__item__list__item' id='size1' onClick={() => chooseSize('s')}>Nhỏ + 0đ</div>
        <div className='product__info__item__list__item' id='size2' onClick={() => chooseSize('m')}>Vừa + 6.000đ</div>
        <div className='product__info__item__list__item' id='size3' onClick={() => chooseSize('l')}>Lớn + 10.000đ</div>
      </div>
    </>
  )
}

export default SizeDrink;