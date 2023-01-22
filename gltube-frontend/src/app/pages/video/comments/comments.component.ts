import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments: any = [];

  quantity = 0;
  isRepliesOpen = false;

  handleShowReplies(ev: any) {
    this.isRepliesOpen = ev;
  }

  handleSuccessClick() {
    console.log("Hi");
  }

  ngOnInit(): void {
    let s = this.comments.length;   
    this.comments.forEach((x: { replies: string | any[]; }) => s += x.replies.length);
    this.quantity = s;
  }

}
