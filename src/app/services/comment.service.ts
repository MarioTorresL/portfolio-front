import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {Response} from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private API = environment.base_url;

  constructor( private http: HttpClient ) { }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}` 
      }
    }
  }

  get(){
    return this.http.get<any>(`${this.API}/comments`)
  }

  post(comment:string){
    return this.http.post(`${this.API}/comments`, {comment}, this.headers )
  }

  getMyComments(uid:number){
    return this.http.get<Response>(`${this.API}/comments/${uid}`, this.headers)
  }

  put(uid:number, comment:string){
    return this.http.put(`${this.API}/comments/${uid}`, {comment}, this.headers)
  }

  delete(uid:number){
    return this.http.delete(`${this.API}/comments/${uid}`, this.headers)
  }
}
