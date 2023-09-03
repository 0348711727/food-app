import React from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function MyMenu({ items, onClick, current }) {
  const [t] = useTranslation('common');
  const itemsTranslate = items.map((item) => {
    const extraBefore = item?.extraBefore || '';
    const extraAfter = item?.extraAfter || '';
    return {
      label: extraBefore + ' ' + t(item.label) + ' ' + extraAfter,
      key: item.key,
      icon: item.icon
    }
  })
  return (
    <>
      {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsTranslate} >
        
      </Menu> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Menu>
          {itemsTranslate.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </>
  );
}

export default MyMenu;