import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'video-comments-component',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {

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
