import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'video-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class VideoMainComponent {

  @Input() video_src = "";

  @Input() title = "Title...";

  @Input() author: any;

  @Input() views = 0;

  @Input() likes = 0;

  handleLikeClick() {
    // TO DO: Like functionality 
  }
}
