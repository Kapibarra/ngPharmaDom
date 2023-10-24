import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'services', component: ServicePageComponent },
  { path: 'products', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
