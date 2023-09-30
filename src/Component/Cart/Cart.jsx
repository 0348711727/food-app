import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Input, Form, Button } from 'antd';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login } from '../../store/reducer/auth.reducer';
/**
* @author
* @function Cart
**/

const Cart = (props) => {
  const cart = useSelector(state => state.cart.data);
  const auth = useSelector(state => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [t, i18n] = useTranslation('common');
  const navigate = useNavigate();

  const handleOpenCart = () => {
    if (!auth) {
      setIsModalOpen(true);
      return;
    }
    navigate("/cart-detail");
  };

  const dispatch = useDispatch();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const data = await dispatch(login(values));
    if (!data.payload.error) {
      navigate("/cart-detail");
      return;
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Modal title={t('welcomeToOurStore')} open={isModalOpen} onCancel={handleCancel} footer={null}>
        <img src='https://order.thecoffeehouse.com/_nuxt/img/thumbnail-login-pop-up.e10d0dd.png' alt="login_thumnail" />
        <Form
          name="basic"
          wrapperCol={{ span: 32 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="telephone"
            rules={[{ required: true, message: t("pleaseInputPhone") }]}
          >
            <Input placeholder={t('telephoneNumber')} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: t('pleaseInputYourPassword') }]}
          >
            <Input.Password placeholder={t("password")} />
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