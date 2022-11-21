import { Component, OnInit } from '@angular/core';

import { technologies } from '../../interfaces/technologies.interface';
import { projects } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public tech: any;
  public proj: any;
  constructor() {}

  ngOnInit(): void {
    this.tech = technologies;
    this.proj = projects;
    this.OrderTech()
  }
  OrderTech() {
    //convert starts numeric to array. Setting for ngfor in html
    this.tech.map((resp: any) => {
      resp.puntuation = Array(resp.stars);
    });
  }
}
