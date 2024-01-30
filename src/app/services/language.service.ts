import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'cn']);
    translate.setDefaultLang('ru');
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = translate.getBrowserLang();
    const langToUse =
      savedLang ||
      (browserLang && ['en', 'ru', 'cn'].includes(browserLang)
        ? browserLang
        : 'ru');

    // Установите выбранный язык
    translate.use(langToUse);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }
}
