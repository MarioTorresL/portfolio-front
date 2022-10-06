import { Component, OnInit } from '@angular/core';
import { technologies } from '../../interfaces/technologies.interface'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public data:any;
  constructor() { }

  ngOnInit(): void {
    this.data = technologies;
    
    //convert starts numeric to array. Setting for ngfor in html
    this.data.map((resp:any)=>{
      resp.puntuation = Array(resp.stars)
    })
  }

}
