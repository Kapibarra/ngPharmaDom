import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss'],
})
export class ServicesMainComponent {
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
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
