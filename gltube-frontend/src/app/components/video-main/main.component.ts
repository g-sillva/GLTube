import { Component, Input } from '@angular/core';

@Component({
  selector: 'video-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class VideoMainComponent {

  @Input() video_src = "";

  @Input() title = "Title...";

  @Input() author_prof_img = "assets/user-icon.png";

  @Input() author_username = "User";

  @Input() author_followers = 0;

  @Input() views = 0;

  @Input() likes = 0;

  handleLikeClick() {
    // TO DO: Like functionality 
  }
}
