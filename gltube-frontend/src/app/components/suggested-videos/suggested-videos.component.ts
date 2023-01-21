import { Component, OnInit } from '@angular/core';
import { VideosServices } from 'src/app/services/videos.services';

@Component({
  selector: 'suggested-videos-container',
  templateUrl: './suggested-videos.component.html',
  styleUrls: ['./suggested-videos.component.scss']
})
export class SuggestedVideosComponent implements OnInit {

  constructor (private videosService: VideosServices) { }

  displayedVideos: any;

  tags = ["All"].concat(this.getFrequentTags());


  getFrequentTags() {
    const map = new Map();
    for (let video of this.videosService.getVideos()) {
      for (let tag of video.tags) {
        if (map.get(tag) === undefined) map.set(tag, 1);
        else map.set(tag, map.get(tag) + 1);
      }
    }

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    return Array.from(sortedMap.keys())
  }

  sortVideos(tagIndex: number) {
    if (tagIndex === 0) {
      this.displayedVideos = this.videosService.getVideos();
      return;
    }
    let selectedTag = this.tags[tagIndex];
    this.displayedVideos = this.videosService.getVideos().filter(v => v.tags.includes(selectedTag));
  }

  ngOnInit(): void {
    this.displayedVideos = this.videosService.getVideos();
  }
}
