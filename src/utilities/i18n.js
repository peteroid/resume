import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import { isDebug } from './dev';

import enCommon from '../locales/en/common.json';
import zhCommon from '../locales/zh/common.json';

let hasInit = false;
export const initI18n = () => {
  if (hasInit) return;

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: isDebug(),
      defaultNS: 'common',
      ns: 'common',
      resources: {
        en: {
          common: enCommon,
        },
        zh: {
          common: zhCommon,
        },
      },
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
  hasInit = true;
};
