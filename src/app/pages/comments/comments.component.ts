import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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

  public commentForm = this.fb.group({
    comment:['', [Validators.required]]
  })

  constructor( private commentsService: CommentService, public authService: AuthService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this.commentsService.get().subscribe(resp=>{
      this.comments = resp.data;
    })
    this.user = this.authService.email;
  }

  postComment(){
    if(this.commentForm.invalid){
      return;
    }
    this.commentsService.post(this.commentForm.value).subscribe(resp=>{
      this.getComments()
      Swal.fire({
        icon: 'success',
        title: 'Your comment has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('resp', resp)
    })
  }


}
