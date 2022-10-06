import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Caixa1Component } from './caixa1/caixa1.component';
import { HeaderComponent } from './header/header.component';
import { FormcaixaComponent } from './formcaixa/formcaixa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Caixa1Component,
    FormcaixaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
