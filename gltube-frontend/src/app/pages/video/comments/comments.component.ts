import { Component, Input } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() comments: any = [];

  quantity = this.getCommentsQuantity();
  isRepliesOpen = false;

  getCommentsQuantity() {
    let s = this.comments.length;
    this.comments.forEach((x: { replies: string | any[]; }) => s += x.replies.length);
    return s;
  }

  handleShowReplies(ev: any) {
    this.isRepliesOpen = ev;
  }

  handleSuccessClick() {
    console.log("Hi");
  }

}
