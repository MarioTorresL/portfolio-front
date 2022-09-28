import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
