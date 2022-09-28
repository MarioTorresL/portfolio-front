import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import {PagesRoutingModule} from './pages/pages-routing.module';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
