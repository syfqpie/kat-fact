import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarPublicComponent } from './components/navbars/navbar-public/navbar-public.component';
import { FooterPublicComponent } from './components/footers/footer-public/footer-public.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    NavbarPublicComponent,
    FooterPublicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
