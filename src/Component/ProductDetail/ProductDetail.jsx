import React, { useEffect, useState } from 'react'
import "./product-detail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from '../../store/reducer/product.reducer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from '../Loading/Loading';
import { Button } from 'antd';
/**
* @author
* @function ProductDetail
**/

const ProductDetail = (props) => {
  const { id } = useParams();

  const product = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [tempPrice, setTempPrice] = useState(0);
  const [tempProduct, setTempProduct] = useState({ size: "", topping: [] });

  useEffect(() => {
    dispatch(fetchDetailProduct(id)).then((value) => {
      setTempPrice(value.payload.price);
    });
  }, [dispatch, id]);
  const chooseSize = (size = 's') => {
    let idButton = size === 's' ? 0 : size === 'm' ? 1 : 2;
    const chooseSize = document.getElementsByClassName('product__info__item__list__item');
    for (var i = 0; i < chooseSize.length; i++) {
      chooseSize[i].classList.remove('active');
      chooseSize[idButton].classList.add('active')
    }
    setTempProduct({ ...tempProduct, size })
  }
  const setPrice = (product) => {
    let price = tempPrice;
    price += product.size === 'l' ? 10000 : product.size === 'm' ? 5000 : 0;
    const toppingPrice = product.topping.reduce((total, current) => total + current.price, 0);
    price += toppingPrice;
    return price;
  }
  const chooseTopping = (id) => {
    const index = tempProduct.topping.findIndex((item) => item.id === id);
    const updatedTopping = [...tempProduct.topping];
    if (index >= 0) {
      updatedTopping.splice(index, 1);
    } else {
      updatedTopping.push({ id, "price": 10000 });
    }
    const chooseToppingNode = document.getElementsByClassName('product__info__item__list__topping');
    chooseToppingNode[id].classList.toggle('active');

    setTempProduct({ ...tempProduct, topping: updatedTopping });
  }

  return (
    <>
      {product.isLoading && <Loading />}
      <div className='product_detail'>
        <div className='image_detail'>
          {product.detail && <LazyLoadImage src={`https://d3jgp7w89aozly.cloudfront.net/food-image/${product.detail.imageName}.webp`} />}
        </div>
        <div className='product_info'>
          <h2>
            {product.detail && product.detail.title}
            <br />
            {product.detail && setPrice(tempProduct)} đ
          </h2>
          <div className='product_size'>
            <p>Chọn size(bắt buộc)</p>
            <div className='d-flex'>
              <div className='product__info__item__list__item' id='size1' onClick={() => chooseSize('s')}>Nhỏ + 0đ</div>
              <div className='product__info__item__list__item' id='size2' onClick={() => chooseSize('m')}>Vừa + 5.000đ</div>
              <div className='product__info__item__list__item' id='size3' onClick={() => chooseSize('l')}>Lớn + 10.000đ</div>
            </div>
          </div>
          <div className='product_topping'>
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
          <Button className='button_add' size='large'>Thêm vào giỏ hàng</Button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;