import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';

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

  post(formComment:any){
    return this.http.post(`${this.API}/comments`, formComment, this.headers )
  }
  //put(comment:any){
  //  console.log(comment)
  //  return this.http.put(`${this.API}/comments`, comment, this.headers)
  //}
}
