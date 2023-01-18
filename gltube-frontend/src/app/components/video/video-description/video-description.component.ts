import { Component, Input } from '@angular/core';

@Component({
  selector: 'video-description-component',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.scss']
})
export class VideoDescriptionComponent {
  
  @Input()
  description = `In this video, I’ll show you video title. Enjoy! 

Add here a few paragraphs about your video
  
BE MY FRIEND: 
🌍Check my website / blog: website URL
👕Buy my merch! merch URL
🎙️Listen to my podcast: podcast URL
Add here a few paragraphs about your video
  
BE MY FRIEND: 
🌍Check my website / blog: website URL
👕Buy my merch! merch URL
🎙️Listen to my podcast: podcast URL`;

  lines_qnt =  this.description.split(/\r\n|\r|\n/).length;
  isExpandable = this.lines_qnt > 8;
  isExpanded = false;

  handleExpandClick() {
    this.isExpanded = !this.isExpanded;
  }
}
