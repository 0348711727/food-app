import { CarOutlined } from '@ant-design/icons'
import { FormatLocaleNumber } from './formatLocaleNumber';
const money = FormatLocaleNumber('50000')
const numberStore = 100;
const SubMenus = [
  {
    label: 'storeAroundVN',
    key: 'Store_Around_VN',
    extraBefore: numberStore
  },
  {
    label: 'freeshipFrom',
    key: 'Freeship_From',
    extraAfter: money,
    icon: <CarOutlined />
  }
]
const MainMenus = [
  {
    label: 'coffee',
    key: 'Coffee',
  },
  {
    label: 'tea',
    key: 'Tea',
  },
  {
    label: 'menu',
    key: 'Menu',
  },
  {
    label: 'homeStory',
    key: 'Home_Story',
  },
  {
    label: 'cloudFee',
    key: 'cloudFee',
  },
  {
    label: 'store',
    key: 'store',
  },
  {
    label: 'hire',
    key: 'hire',
  },
];

const TranslateLang = [
  {
    label: 'vn',
    key: 'vn'
  },
  {
    label: 'en',
    key: 'en'
  }
]
const Logout = [
  {
    label: 'Logout',
    key: 'logout'
  },
  {
    label: 'en',
    key: 'en'
  }
]
export { SubMenus, MainMenus, TranslateLang, Logout }

export const language = {
  vn: 'vn',
  en: 'en'
}
