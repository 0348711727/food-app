import { useTranslation } from "react-i18next";
import './header.css';
import logo from '../../assets/logo.png';
import { DownOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { Dropdown, Space } from 'antd'
// import avatar from '../../assets/avatar.png';
import MyMenu from "../../Component/MyMenu/MyMenu";
import { language } from "../../constant/constant";
import { SubMenus, MainMenus, TranslateLang } from '../../Utils/constant';
import { useEffect } from "react";
function Header() {
  let top = 50;
  const items = TranslateLang;
  const [, i18n] = useTranslation('common');
  const [scrollY, setScrollY] = useState(0)
  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    // console.log(e)
    setCurrent(e.key);
    [language.vn, language.en].includes(e.keyPath[0]) && (e.key === language.vn ? i18n.changeLanguage(language.vn) : i18n.changeLanguage(language.en));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  top = scrollY < 50 ? (50 - scrollY) : 0;

  return (
    <>
      <div className="header">
        <div className='header-top'>
          <MyMenu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={SubMenus} />
        </div>
        <div className='header-main' style={{ top }}>
          <div>
            <img className='header-logo' src={logo} alt='img search' onClick={onClick} />
          </div>
          <MyMenu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={MainMenus} />

          <Dropdown menu={{ items, onClick }}>
            <div onClick={(e) => e.preventDefault()}>
              <Space>
                {i18n.language && i18n.language.toUpperCase()}
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default Header;