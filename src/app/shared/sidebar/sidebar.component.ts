import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public email: string = ''
  public token: string = ''

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    this.login()
  }

  login(){
    this.token = this.authService.token as string
    this.email = this.authService.email as string
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
