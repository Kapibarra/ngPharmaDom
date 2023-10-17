import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'cn']);
    translate.setDefaultLang('ru');
    const browserLang = translate.getBrowserLang();
    const langToUse =
      browserLang && ['en', 'ru', 'cn'].includes(browserLang)
        ? browserLang
        : 'ru';

    // Установите выбранный язык
    translate.use(langToUse);
  }
}
