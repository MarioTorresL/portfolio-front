import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/portfolio-front/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
