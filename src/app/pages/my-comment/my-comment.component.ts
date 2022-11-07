import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-comment',
  templateUrl: './my-comment.component.html',
  styleUrls: ['./my-comment.component.css']
})
export class MyCommentComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.user)
  }

}
