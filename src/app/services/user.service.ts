import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import {tap} from 'rxjs';
import {environment} from 'src/environments/environment';
import {User} from '../interfaces/user.interface';

const API = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  
  post(formRegister:User){
    return this.http.post(`${API}/users`, formRegister).pipe(
      tap((resp:any)=>{
        localStorage.setItem('token', resp.token)
      })
    )
  }

}
