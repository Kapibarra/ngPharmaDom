import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
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

  ngOnInit(): void {}
}
