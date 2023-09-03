import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import en from './en.json';
import vn from './vn.json';
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: en
      },
      vn: {
        common: vn
      }
    },
    fallbackLng: 'vn',
    debug: false,

  });

export default i18next;
