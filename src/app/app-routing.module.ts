import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthRoutingModule} from './auth/auth.routing';
import { NotFoundComponent } from './not-found/not-found.component';

import {PagesRoutingModule} from './pages/pages-routing.module';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'auth', redirectTo:'/auth', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
