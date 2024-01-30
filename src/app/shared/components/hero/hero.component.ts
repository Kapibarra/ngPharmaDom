import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['en', 'ru', 'cn']);
  //   translate.setDefaultLang('ru');
  //   const browserLang = translate.getBrowserLang();
  //   const langToUse =
  //     browserLang && ['en', 'ru', 'cn'].includes(browserLang)
  //       ? browserLang
  //       : 'ru';

  //   // Установите выбранный язык
  //   translate.use(langToUse);
  // }
  constructor(public languageService: LanguageService) {}

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
}
