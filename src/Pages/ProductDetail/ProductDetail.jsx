import React, { useEffect, useState } from 'react'
import "./product-detail.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from '../../store/reducer/product.reducer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button, InputNumber, notification } from 'antd';
import { AWS_CDN } from '../../environment';
import { SizeDrink, ToppingDrink } from '../../Component';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { addToCart } from '../../store/reducer/cart.reducer';
/**
* @author
* @function ProductDetail
**/

const ProductDetail = (props) => {
  const { id } = useParams();

  const [api, contextHolder] = notification.useNotification();

  const product = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [tempProduct, setTempProduct] = useState({ size: "s", topping: [], quantity: 1, tempPrice: 0 });

  useEffect(() => {
    dispatch(fetchDetailProduct(id)).then((value) => {
      setTempProduct({ ...tempProduct, tempPrice: value.payload.price });
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
    let price = tempProduct.tempPrice;
    price += product.size === 'l' ? 10000 : product.size === 'm' ? 6000 : 0;
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
      updatedTopping.push({ id, price: product.detail.topping[id].price });
    }
    const chooseToppingNode = document.getElementsByClassName('product__info__item__list__topping');
    chooseToppingNode[id].classList.toggle('active');

    setTempProduct({ ...tempProduct, topping: updatedTopping });
  }

  const removeActiveClass = (className) => {
    const activeClassNode = document.getElementsByClassName(className);
    for (var i = 0; i < activeClassNode.length; i++) {
      activeClassNode[i].classList.remove('active');
    }
  }
  const onChangeNumber = (value) => {
    if (value === null) value = 1;
    setTempProduct({ ...tempProduct, quantity: value });
  };

  const addCart = (type) => {
    removeActiveClass('product__info__item__list__topping');
    removeActiveClass('product__info__item__list__item');
    dispatch(addToCart(tempProduct));

    api[type]({
      message: 'Đã thêm sản phẩm vào giỏ hàng ',
      description:
        `${product.detail.title} size (${tempProduct.size.toUpperCase()}) đã được thêm vào giỏ hàng`,
    });
    setTempProduct({ size: "s", topping: [], quantity: 1, tempPrice: product.detail.price });
  }

  return (
    <>
      {contextHolder}
      <div className='route d-flex'>
        <Link to='/collections/all'>Menu /</Link>
        <Link to='/collection/san-pham-hot-trang-chu'>Sản phẩm hot trang chủ /</Link>
        <p>{product?.detail?.title || <Skeleton />}</p>
      </div>
      <div className='product_detail'>
        <div className='image_detail'>
          {product?.detail?.imageName ? <LazyLoadImage className='skeleton' src={`${AWS_CDN}${product.detail.imageName}.webp`} /> : <Skeleton height={'400px'} width={'300px'} />}
        </div>
        <div className='product_info'>
          <h2>
            {product?.detail?.title || <Skeleton height={'50px'} width={'300px'} />}
            <br />
            <p>{product?.detail?.title ? ((setPrice(tempProduct) * tempProduct.quantity) + 'đ') : <Skeleton height={'50px'} />}</p>
          </h2>
          <div className='product_size'>
            <SizeDrink chooseSize={chooseSize} />
          </div>
          <div className='product_topping'>
            <ToppingDrink chooseTopping={chooseTopping} />
          </div>
          <div>Nhập số lượng: <InputNumber min={1} max={50} onChange={onChangeNumber} value={tempProduct.quantity} defaultValue={1} /></div>
          <Button className='button button_add' disabled={product?.detail?.imageName ? false : true} size='large' onClick={() => addCart('success')}>Thêm vào giỏ hàng</Button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;