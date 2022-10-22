import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CommentsComponent} from './comments/comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CommentsComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
