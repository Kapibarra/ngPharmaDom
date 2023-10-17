import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  exports: [],
  declarations: [AppComponent, MainComponent, ContactsPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
