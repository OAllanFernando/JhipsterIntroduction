import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('pt-br');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  'pt-br': { name: 'Português (Brasil)' },
  en: { name: 'English' },
  fr: { name: 'Français' },
  ja: { name: '日本語' },
  ru: { name: 'Русский' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'pt-br')));
};
