import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public token = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.token = this.authService.token;
    console.log('token', this.token)
  }

}
