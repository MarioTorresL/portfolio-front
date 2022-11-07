import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {CommentsComponent} from './comments/comments.component';
import {MyCommentComponent} from './my-comment/my-comment.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes =[
  {
    path: '', component: PagesComponent,
    children:[
      {path:'', component: HomeComponent},
      {path:'comments', component: CommentsComponent},
      {
        path: 'my-comment', component: MyCommentComponent, canActivate:[AuthGuard]
      }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
