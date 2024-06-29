import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { OffersComponent } from './components/offers/offers.component';
import { ProductsComponent } from './components/products/products.component';
import { SummerComponent } from './components/summer/summer.component';
import { BotBtnsComponent } from './components/bot-btns/bot-btns.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideListComponent } from './components/side-list/side-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdvertisementComponent,
    HomeComponent,
    HeaderComponent,
    OffersComponent,
    ProductsComponent,
    SummerComponent,
    BotBtnsComponent,
    SideMenuComponent,
    SideListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
