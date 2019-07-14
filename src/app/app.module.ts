import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { HeaderComponent } from './header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '',                component: HomeComponent },
  {path: 'home',           component: HomeComponent },
  {path: 'basket',            component: BasketComponent },
  {path: 'pizzalist',       component: PizzalistComponent },
  {path: 'header',       component: HeaderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    PizzalistComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, RouterModule.forRoot(routes)],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
