import { Component, Input } from '@angular/core';

@Component({
  selector: 'video-description-component',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.scss']
})
export class VideoDescriptionComponent {
  
  @Input() description = "";

  lines_qnt =  this.description.split(/\r\n|\r|\n/).length;
  isExpandable = this.lines_qnt > 8;
  isExpanded = false;

  handleExpandClick() {
    this.isExpanded = !this.isExpanded;
  }
}
