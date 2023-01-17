import { Component } from '@angular/core';

@Component({
  selector: 'popular-videos-component',
  templateUrl: './popular-videos.component.html',
  styleUrls: ['./popular-videos.component.scss']
})
export class PopularVideosComponent {

  videos = [
    {
      isPrincipal: true,
      url: "/",
      thumbnail: "https://www.magneticmag.com/.image/t_share/MTg5MzAxOTU3ODM0MzE5NzY1/thumb-1920-1222761.jpg",
      title: "Let's Play Elden Ring Seamless Coop - ME...",
      author_profile_image: "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
      author_username: "Mateus Andrade",
      views: 2731,
      date:  "1 month ago",
      length: "12:24"
    },
    {
      isPrincipal: false,
      url: "/",
      thumbnail: "https://www.magneticmag.com/.image/t_share/MTg5MzAxOTU3ODM0MzE5NzY1/thumb-1920-1222761.jpg",
      title: "Let's Play Elden Ring Seamless Coop - ME...",
      author_profile_image: "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
      author_username: "Mateus Andrade",
      views: 2731,
      date:  "1 month ago",
      length: "12:24"
    },
    {
      isPrincipal: false,
      url: "/",
      thumbnail: "https://www.magneticmag.com/.image/t_share/MTg5MzAxOTU3ODM0MzE5NzY1/thumb-1920-1222761.jpg",
      title: "Let's Play Elden Ring Seamless Coop - ME...",
      author_profile_image: "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
      author_username: "Mateus Andrade",
      views: 2731,
      date:  "1 month ago",
      length: "12:24"
    },
  ]

}
