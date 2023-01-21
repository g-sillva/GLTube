import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment-card-component',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {

  @Input() isReply = false;

  @Input() reply_username = "reply_username";

  @Input() author_profile_image = "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg";

  @Input() author_channel_url = "/";

  @Input() author_username = "User";

  @Input() date = "right now";

  @Input() likes = 0;

  @Input() content = "...";

}
