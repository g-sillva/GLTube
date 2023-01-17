import { Component, Input } from '@angular/core';

@Component({
  selector: 'pop-big-card-component',
  templateUrl: './pop-big-card.component.html',
  styleUrls: ['./pop-big-card.component.scss']
})
export class PopBigCardComponent {

  @Input() url = "/";

  @Input() thumbnail = "";
  
  @Input() title = "Video title...";
  
  @Input() author_profile_image = "assets/user-icon.png";
  
  @Input() author_username = "Author...";
  
  @Input() views: number = 0;
  
  @Input() date = "now";
  
  @Input() length = "0:00";

}
