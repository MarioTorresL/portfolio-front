import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { CommentService } from 'src/app/services/comment.service';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-comment',
  templateUrl: './my-comment.component.html',
  styleUrls: ['./my-comment.component.css'],
})
export class MyCommentComponent implements OnInit {

  public comments!:any
  public uid: number = 0
  public edit:boolean = false

  constructor(private commentsService: CommentService, private authService: AuthService) {}

  ngOnInit(): void {
    this.uid = this.authService.uid;
    this.myComments()
  }

  myComments(){
    this.commentsService.getMyComments(this.uid).subscribe(resp=>{
      this.comments = resp.data
    }) 
  }

  new(comment: string) {
    this.commentsService.post( comment ).subscribe((resp) => {
      this.myComments()
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        title: 'Your comment has been posted',
        showConfirmButton: false,
        timer: 500,
      });
    });
  }

  update(id:number, comment:string){
    this.edit = true
    return this.commentsService.put(id, comment).subscribe(resp=>{
      console.log(resp)
      this.edit=false
      this.myComments()
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        title: 'Your comment has been Deleted',
        showConfirmButton: false,
        timer: 500,
      });
    })
  }

  delete(uid:number){
    return this.commentsService.delete(uid).subscribe(resp=>{
      this.myComments()
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        title: 'Your comment has been Deleted',
        showConfirmButton: false,
        timer: 500,
      });
    })
  }
}
