import React from 'react'
import { useSelector } from 'react-redux';
import { FormatLocaleNumber } from '../../Utils/formatLocaleNumber';

/**
* @author
* @function ToppingDrink
**/

const ToppingDrink = ({ chooseTopping }) => {
  const toppingList = useSelector(state => state.products?.detail?.topping) || [];
  return (
    <div>
      <p>Topping</p>
      <div className='d-flex flex_wrap'>
        {
          toppingList.length > 0 && toppingList.map((value, index) =>
            <div
              key={value.title}
              className='product__info__item__list__topping'
              onClick={() => chooseTopping(index)}>{value.title} + {FormatLocaleNumber(value.price)}</div>
          )
        }

      </div>
    </div>
  )
}

export default ToppingDrink;