import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-comment-component',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {

  reply_text = "";

  @Input() successLabel = "Comment";
  
  @Input() user_username = "User";

  @Input() user_channel_url = "/";

  @Input() user_profile_image = "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg";

  @Output() onSuccess = new EventEmitter();

  handleCancel() {
    this.reply_text = "";
  }

  handleSuccess() {
    this.onSuccess.emit();
  }
}
