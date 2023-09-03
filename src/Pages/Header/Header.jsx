import { useTranslation } from "react-i18next";
import './header.css';
import logo from '../../assets/logo.png';
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { SubMenus, MainMenus, TranslateLang, language } from '../../Utils/constant';
import { useEffect } from "react";
function Header() {
  const items = TranslateLang;
  const [t, i18n] = useTranslation('common');
  const onClick = (e) => {
    [language.vn, language.en].includes(e.keyPath[0]) && (e.key === language.vn ? i18n.changeLanguage(language.vn) : i18n.changeLanguage(language.en));
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('container');
      const sticky = container.getAttribute('data-original-offset-top');

      if (!sticky) {
        // Store the original offsetTop value
        container.setAttribute('data-original-offset-top', container.offsetTop);
      }

      if (window.scrollY >= sticky) {
        container.classList.add("sticky");
      } else {
        container.classList.remove("sticky");
        // Reset the top property to its original value
        container.style.top = '';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className="header">
        <div className="subcontainer">
          <ul className="nav__list">
            {SubMenus && SubMenus.map(({ label, key, extraBefore, extraAfter, icon }) => (
              <li className="nav__link" key={key}>
                {extraBefore ? extraBefore + " " + t(label) : t(label) + " " + extraAfter} {icon}
              </li>
            ))}
          </ul>
        </div>
        <nav className="nav container" id="container">
          <a href="/">
            <img className='header-logo' src={logo} alt='img search' onClick={onClick} />
          </a>
          <div className='header-main'>
            <ul className="nav__list">
              {MainMenus && MainMenus.map(({ label, key }) => (
                <li className="nav__link" key={key}>
                  <a href={label}>{t(label)}</a>
                </li>
              ))}
            </ul>

          </div>
          <Dropdown menu={{ items, onClick }}>
            <div className="nav__link" onClick={(e) => e.preventDefault()}>
              <Space>
                {i18n.language && i18n.language.toUpperCase()}
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </nav>
      </header>
    </>
  )
}

export default Header;