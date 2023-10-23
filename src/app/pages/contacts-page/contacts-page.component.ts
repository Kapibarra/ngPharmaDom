import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
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
