import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosServices } from 'src/app/services/videos.services';

@Component({
  selector: 'app-video-component',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video_id: any;
  video: any;

  constructor (private service: VideosServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.video_id = this.route.snapshot.paramMap.get("id");
    this.video = this.service.videos.find(x => x.id == this.video_id);
    
    if (this.video === undefined) {
      this.router.navigate(['/'])
    }
  }
}
