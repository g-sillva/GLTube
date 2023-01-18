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
      thumbnail: "https://cdn.vox-cdn.com/thumbor/YCF4_Agu-DG3PCxTLMWCdes2jdI=/0x0:3000x2000/1200x800/filters:focal(1938x554:2418x1034)/cdn.vox-cdn.com/uploads/chorus_image/image/63331035/944827400.jpg.0.jpg",
      title: "Mark Zuckerberg Apologizes for Cambridge Analytica Scandal...",
      author_profile_image: "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
      author_username: "Mateus Andrade",
      views: 2731,
      date:  "1 month ago",
      length: "12:24"
    },
    {
      isPrincipal: false,
      url: "/",
      thumbnail: "https://pbs.twimg.com/media/FmIHf7fXkBIFY7l.jpg",
      title: "Notícias & Vazamentos de VALORANT ",
      author_profile_image: "https://pbs.twimg.com/profile_images/1601585425256271874/-sgoSESi_400x400.jpg  ",
      author_username: "Cypher",
      views: 10233,
      date:  "1 month ago",
      length: "12:24"
    },
  ]

}
