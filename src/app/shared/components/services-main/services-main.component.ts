import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss'],
})
export class ServicesMainComponent {
  constructor(
    public languageService: LanguageService,
    private scroller: ViewportScroller
  ) {}
  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
  visible: boolean = false;

  onClickScroll(elId: string): void {
    this.scroller.scrollToAnchor(elId);
    console.log(elId);
  }
  showDialog() {
    this.visible = true;
  }
}
