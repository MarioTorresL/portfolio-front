import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public submit = false;

  public loginForm = this.fb.group({
    email:[localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    encryptedPassword: ['', [Validators.required]],
    remember:false
  })

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  login(){

    this.authService.login(this.loginForm.value).subscribe(resp=>{

      if(this.loginForm.get('remember')?.value){
        localStorage.setItem('email', this.loginForm.get('email')?.value!)
      }else{
        localStorage.removeItem('email')
      }
      this.router.navigateByUrl('/')
    }, err=>{
      console.log(err)
      Swal.fire({
        title: 'Error',
        text: err.error.error,
        icon: 'error'
      })
    })
  }

}
