import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import {environment} from 'src/environments/environment';

const API = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient, private router: Router ) { }

  get token():string{
    return localStorage.getItem('token') || ''
  }

  login(formLogin:any){
    return this.http.post(`${API}/auth/login`, formLogin).pipe(
      tap((resp:any)=>{
        localStorage.setItem('token', resp.accessToken)
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('')
  }

}
