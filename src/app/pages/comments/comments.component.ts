import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {CommentService} from 'src/app/services/comment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments:any;

  public user:any;

  constructor( private commentsService: CommentService, public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this.commentsService.get().subscribe(resp=>{
      this.comments = resp.data;
    })
    this.user = this.authService.user;
  }

  add(){
    this.router.navigateByUrl('/my-comment')
  }

}
