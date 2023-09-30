import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal, Input, Form, Button } from 'antd';
import './cart.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/**
* @author
* @function Cart
**/

const Cart = (props) => {
  const cart = useSelector(state => state.cart.data);
  const auth = useSelector(state => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let location = useLocation();
  const [t, i18n] = useTranslation('common');
  const navigate = useNavigate();

  const handleOpenCart = () => {
    if (!auth) {
      setIsModalOpen(true);
      return;
    }
    navigate("/product-detail");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    console.log(location)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <>
      <Modal title={t('welcomeToOurStore')} open={isModalOpen} onCancel={handleCancel} footer={null}>
        <img src='https://order.thecoffeehouse.com/_nuxt/img/thumbnail-login-pop-up.e10d0dd.png' alt="login_thumnail" />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: t("pleaseInputYourEmail") }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: t('pleaseInputYourPassword') }]}
          >
            <Input.Password />
          </Form.Item>


          <Button className='button button_login' htmlType="submit">
            {t('login')}
          </Button>
        </Form>
      </Modal>
      <div className='cart_popup' onClick={handleOpenCart}>
        <div className='custom_badge'>
          <p className='item_in_cart'>{cart.reduce((current, obj) => obj.quantity + current, 0)}</p>
        </div>
        <ShoppingCartOutlined style={{ fontSize: '24px' }} />
      </div>
    </>
  )
}

export default Cart;