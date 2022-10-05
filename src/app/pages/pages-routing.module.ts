import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {CommentsComponent} from './comments/comments.component';

const routes: Routes =[
  {
    path: '', component: PagesComponent,
    children:[
      {path:'', component: HomeComponent},
      {path:'comments', component: CommentsComponent}
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
