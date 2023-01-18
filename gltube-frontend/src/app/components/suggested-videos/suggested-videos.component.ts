import { Component } from '@angular/core';

@Component({
  selector: 'suggested-videos-container',
  templateUrl: './suggested-videos.component.html',
  styleUrls: ['./suggested-videos.component.scss']
})
export class SuggestedVideosComponent {

  videos = 
  [
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/ilf3j9Ccmf4/maxresdefault.jpg",
      "video_length": "12:24",
      "video_title": "I Survived 100 Days as a VILLAGER in Hardcore Minecraft",
      "user_profile_img_url": "https://pfps.gg/assets/pfps/8165-serious-paisen-senpai.png",
      "user_username": "Serious Paisen",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Gaming"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/KJgsSFOSQv0/maxresdefault.jpg",
      "video_length": "04:43:00",
      "video_title": "C Programming Tutorial for Beginners",
      "user_profile_img_url": "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s900-c-k-c0x00ffffff-no-rj",
      "user_username": "freeCodeCamp.org",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Coding"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/b6iP1KnN5MU/maxresdefault.jpg",
      "video_length": "12:24",
      "video_title": "Thumbnail Sketches. How to draw, what's the point?",
      "user_profile_img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlYmm2_-xfQEP0vtcnh4W5nqWSbSgX0qIhuO2v71cuhQT1mpoflagWMs3WQ4Mfm14s50&usqp=CAU",
      "user_username": "Just Mark",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Drawing", "Criativity"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/OrwBc6PwAcY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAflN3VayhknqWz0auYUGG6TBNn-A",
      "video_length": "2:29",
      "video_title": "The Michelangelo of Microsoft Excel",
      "user_profile_img_url": "https://yt3.ggpht.com/ytc/AMLnZu-JSIO_rqnxRrj7XElfGHXgCXm7sQlH7TeyLZZ-6w=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "Great Big Story",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Technology"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/FsAj9uJC_u4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAbQQCmMw4wPBxnhCmfEm39U8RdQ",
      "video_length": "11:38",
      "video_title": "LOJAS AMERICANAS FALIU? (AMER3) | R$20BI DE DÍVIDA",
      "user_profile_img_url": "https://yt3.ggpht.com/uWEgkZKIZCULuZXtpB8RxVdbiT2Z5fuNOWYd_w7454g5VYg54bfex61KkvNOoprVvWOGAnA4kg=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "O Primo Rico",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Finance"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/0XQ85Z8CR9Y/maxresdefault.jpg",
      "video_length": "02:10:13",
      "video_title": "Coding an App That Teaches Code",
      "user_profile_img_url": "https://i.redd.it/mi2iuw8xt1b41.jpg",
      "user_username": "Random Coder",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Coding"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/NSUjXhWuGSc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6vu07iiniJ012g3qq2RSJfdEa4w",
      "video_length": "28:57",
      "video_title": "Best TV News Bloopers Of The Decade",
      "user_profile_img_url": "https://yt3.ggpht.com/xIBr-DDHkaOif1UjsVmVIMOJdbrLdGq7HNWq6vcQQHr_I52DRbJMN3sQnc_8PL70DqjKTdSx=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "Funny Local News",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Comedy"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/o5ZnTCgOrA4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUtDeW9F0xi-LJfTGDtsOtSQr6Zg",
      "video_length": "18:45",
      "video_title": "Can I Jump Rope Fast Enough To Stop The Rain?",
      "user_profile_img_url": "https://yt3.ggpht.com/ytc/AMLnZu-kftf__NlEjzAzeegWk9_lMW7t3r8vvaPWlQRXEA=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "I Did a Thing",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Criativity"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/so7vRxHPeN4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCz1dYOxuEssHXnIbap-9_gH5Y7VQ",
      "video_length": "6:10",
      "video_title": "ISTO VAI SER O FUTURO😱 SMARTPHONE que ESTICA",
      "user_profile_img_url": "https://yt3.ggpht.com/ytc/AMLnZu8a8Vwo9B64i2KPqQDGvBvHn0oOEUGWrIlVw1vKFg=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "Nuno Agonia",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Technology"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/ZuyudR-ASCQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCc_0CCVHweSMllOO9iSaxC_JoFUg",
      "video_length": "3:34",
      "video_title": "Casal pode pagar multa ao invés de receber prêmio da Mega- Sena",
      "user_profile_img_url": "https://yt3.ggpht.com/ytc/AMLnZu-T7N47MAPoQT-zyteLBYfDSqYH7u3eNzJbXGK90g=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "Balanço Geral",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Curiosity"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/etRAoZ1nh2I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADkm2y7JO_LCutz9u0rPX2Zsv2ow",
      "video_length": "3:25",
      "video_title": "Uma ALEMÃ entre BRASILEIROS",
      "user_profile_img_url": "https://yt3.ggpht.com/2zH0h1ZzITWWvlLGLMUGvJdlIAENxKNl9HEpxnDf5nUhiV3KW7HivfqmAuMgH4mOpK7Kaf31=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "Cortes do Venus [OFICIAL]",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Comedy"],
    },
    {
      "video_url": "/",
      "thumbnail_url": "https://i.ytimg.com/vi/mBqWbS1mUy4/maxresdefault.jpg",
      "video_length": "20:24",
      "video_title": "How League Of Legends Champions Are Illustrated | Modern Icons",
      "user_profile_img_url": "https://yt3.ggpht.com/ytc/AMLnZu9HLp8cv9c4hHHusfZisSfkNhN0la8Q1C671wGOEA=s88-c-k-c0x00ffffff-no-rj",
      "user_username": "Insider",
      "video_views": Math.floor(Math.random() * 100000),
      "video_date": Math.floor(Math.random() * 11) + 1 + " months ago",
      "tags": ["Drawing", "Criativity"],
    },
  ]
  displayedVideos = this.videos;

  tags = ["All"].concat(this.getFrequentTags());


  getFrequentTags() {
    const map = new Map();
    for (let video of this.videos) {
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
      this.displayedVideos = this.videos;
      return;
    }
    let selectedTag = this.tags[tagIndex];
    this.displayedVideos = this.videos.filter(v => v.tags.includes(selectedTag));
  }
}
