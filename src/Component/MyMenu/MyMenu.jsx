import React from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';

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
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsTranslate} />
    </>
  );
}

export default MyMenu;