import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //check if form submit
  public submit = false;

  public registerForm = this.fb.group({
    firstName:['', [Validators.required]],
    lastName:['', [Validators.required]],
    userName:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.email]],
    encryptedPassword:['', [Validators.required]],
    repeatPassword:['', [Validators.required]]
  },{
    validator: this.formPasswordsValidator('encryptedPassword', 'repeatPassword')
  })

  constructor( private fb: FormBuilder, private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  checkPasswords():boolean{
    
    const passwordOne = this.registerForm.get('encryptedPassword')?.value;
    const passwordTwo = this.registerForm.get('repeatPassword')?.value;

    if((passwordOne == '' || passwordTwo == '') && this.submit){
      return true;
    }

    if((passwordOne !== passwordTwo)&& this.submit){
      return true;
    }else{
      return false;
    }
  }

  checkValid(field:string):boolean{
    if(this.registerForm.get(field)?.invalid && this.submit){
      return true;
    }else{
      return false;
    }
  }

  //validate passwords in formGroup
  formPasswordsValidator(firstPass:string, secondPass:string){
    return(formGroup:FormGroup)=>{
      const passOne = formGroup.get(firstPass);
      const passTwo = formGroup.get(secondPass);
      if(passOne!.value == passTwo!.value){
        passTwo?.setErrors(null)
      }else{
        passTwo?.setErrors({notSame:true})
      }
    }
  }

  createUser(){
    this.submit = true;

    if(this.registerForm.invalid){
      return;
    }
    this.userService.post(this.registerForm.value).subscribe(resp=>{
      this.router.navigateByUrl('/')
      Swal.fire({
        title:'User Created!',
        icon: 'success'
      })
    }, err=>{
      Swal.fire({
        title:'Error',
        text: err.error.errors,
        icon: 'error'
      })
    })
  }

}
