import { Component, Input } from '@angular/core';

@Component({
  selector: 'video-sug-card-component',
  templateUrl: './video-sug-card.component.html',
  styleUrls: ['./video-sug-card.component.scss']
})
export class VideoSugCardComponent {

  @Input() isFirst = false;
}
