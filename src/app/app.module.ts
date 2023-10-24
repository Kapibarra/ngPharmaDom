import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { MainComponent } from './pages/main/main.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeroComponent } from './shared/components/hero/hero.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component'; // Import BrowserAnimationsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ServicesMainComponent } from './shared/components/services-main/services-main.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactsPageComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    HeaderComponent,
    ServicePageComponent,
    ContactsComponent,
    ProductsPageComponent,
    ServicesMainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
