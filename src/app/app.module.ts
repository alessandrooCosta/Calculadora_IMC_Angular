import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Caixa1Component } from './caixa1/caixa1.component';
import { HeaderComponent } from './header/header.component';
import { FormcaixaComponent } from './formcaixa/formcaixa.component';
import { CaixainfoComponent } from './caixainfo/caixainfo.component';
import { InfoComponent } from './info/info.component';
import { Info1Component } from './info1/info1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Caixa1Component,
    FormcaixaComponent,
    CaixainfoComponent,
    InfoComponent,
    Info1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
