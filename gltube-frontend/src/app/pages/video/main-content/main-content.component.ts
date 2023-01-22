import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-content-component',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

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
