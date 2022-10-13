import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {catchError, map, Observable, of, tap} from 'rxjs';
import {environment} from 'src/environments/environment';

const API = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!:any;

  constructor( private http: HttpClient, private router: Router ) { }

  get token():string{
    return localStorage.getItem('token') || ''
  }

  get email():string{
    return this.user?.email || '';
  }

  get headers(){
    return{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}` 
      }
    }
  }

  login(formLogin:any){
    return this.http.post(`${API}/auth/login`, formLogin).pipe(
      tap((resp:any)=>{
        localStorage.setItem('token', resp.accessToken)
        this.user = formLogin
        if(formLogin.remember){
          localStorage.setItem('remember', 'true')
        }
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
   return this.router.navigateByUrl('')
  }

  validateToken(): Observable<boolean>{
    
    return this.http.get(`${API}/auth/renew`, this.headers).pipe(
      map((resp:any)=>{
        this.user = resp.user;
        localStorage.setItem('token', resp.token)
        return true;
      }),catchError(error => of(false)) 
    )

  }

}
