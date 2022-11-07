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

  public user!: User  

  constructor(private authService: AuthService, private router:Router ) { }

  ngOnInit(): void {
    this.login()
  }

  login(){
    this.user = this.authService.user
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
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#112530',
        }
                 )
      }
    })
  }

}
