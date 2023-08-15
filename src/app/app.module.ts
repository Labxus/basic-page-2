import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';
import { AppComponent } from './app.component';
import { SubPagesModule } from './pages/subPages/sub-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomePageModule,
    AboutModule,
    ContactModule,
    BrowserModule,
    AppRoutingModule,
    SubPagesModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
