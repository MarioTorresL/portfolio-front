import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/interfaces/user.interface';
import {AuthService} from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public email: any;
  public token: any;

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
    this.login()
  }

  login(){
    this.token = this.authService.token
    this.email = this.authService.email
  }

  logout(){
    Swal.fire({
      title: 'Are you sure?',
      text: "are you sure to logout?!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#112530',
      cancelButtonColor: '#FFCA2C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        this.email = ''
        this.token = ''
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#112530',
        }
                 )
      }
    })
  }

}
