import { Component, Input } from '@angular/core';

@Component({
  selector: 'basic-card-component',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {

  @Input()
  video_id = "0";

  @Input()
  thumbnail_url = "https://i1.sndcdn.com/artworks-F3pY0UrwsxcGlZs8-zrn5ZQ-t500x500.jpg";

  @Input()
  video_length = "12:24";

  @Input()
  video_title = "Why chinese students come to America?";

  @Input()
  user_profile_img_url = "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg";

  @Input()
  user_username = "Mateus Andrade";

  @Input()
  video_views = 2719;

  @Input()
  video_date = "1 month ago";
}
