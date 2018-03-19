import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { EnglishNavComponent } from './nav/eng/english-nav/english-nav.component';
import { DhivehiNavComponent } from './nav/dhiv/dhivehi-nav/dhivehi-nav.component';
import { EnglishmainComponent } from './englishmain/englishmain.component';
import { CrocileComponent } from './crocile/crocile.component';
import { SubnewsComponent } from './subnews/subnews.component';
import { FooterEComponent } from './footer-e/footer-e.component';



@NgModule({
  declarations: [
    AppComponent,
    EnglishNavComponent,
    DhivehiNavComponent,
    EnglishmainComponent,
    CrocileComponent,
    SubnewsComponent,
    FooterEComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"",
        component:EnglishmainComponent
      }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
