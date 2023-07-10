import { CarOutlined, PhoneOutlined } from '@ant-design/icons'
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
    label: 'booking',
    key: 'Booking',
    icon: <PhoneOutlined />
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
  }
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
export { SubMenus, MainMenus, TranslateLang }