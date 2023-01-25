import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-videos-container-component',
  templateUrl: './profile-videos-container.component.html',
  styleUrls: ['./profile-videos-container.component.scss']
})
export class ProfileVideosContainerComponent {

  
  @Input() videos: any;

}
