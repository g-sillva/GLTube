export class VideosServices {
    videos = [
        {
          "id": 1,
          "title": "debate com o marselo careca ft. Felca",
          "video_src": "",
          "author_prof_img": "https://yt3.ggpht.com/ytc/AMLnZu_nwiiYo4HsiTYf9vOrmjW1OWFqZi4lA7lk_kfSPg=s48-c-k-c0x00ffffff-no-rj",
          "author_username": "orochidois",
          "author_followers": 1470000,
          "views": 12003,
          "likes": 4650,
          "description": `In this video, I’ll show you video title. Enjoy! 

Add here a few paragraphs about your video
  
BE MY FRIEND: 
🌍Check my website / blog: website URL
👕Buy my merch! merch URL
🎙️Listen to my podcast: podcast URL
Add here a few paragraphs about your video
  
BE MY FRIEND: 
🌍Check my website / blog: website URL
👕Buy my merch! merch URL
🎙️Listen to my podcast: podcast URL`,
          "comments": [
            {
              "id": 1,
              "author_profile_img": "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
              "author_channel_url": "/",
              "author_username": "Mateus Andrade",
              "date": "1 week ago",
              "likes": 3,
              "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
              "replies": [
                {
                  "id": 4,
                  "author_profile_img": "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
                  "author_channel_url": "/",
                  "author_username": "Mateus Andrade",
                  "date": "1 week ago",
                  "likes": 3,
                  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
                  "replies": [],
                  "reply_to": 1,
                },
                {
                  "id": 2,
                  "author_profile_img": "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
                  "author_channel_url": "/",
                  "author_username": "Mateus Andrade",
                  "date": "1 week ago",
                  "likes": 3,
                  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
                  "replies": [],
                  "reply_to": 1,
                },
              ],
              "reply_to": null,
            },
            {
              "id": 3,
              "author_profile_img": "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
              "author_channel_url": "/",
              "author_username": "Mateus Andrade",
              "date": "1 week ago",
              "likes": 3,
              "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
              "replies": [],
              "reply_to": null,
            },
            {
              "id": 5,
              "author_profile_img": "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg",
              "author_channel_url": "/",
              "author_username": "Mateus Andrade",
              "date": "1 week ago",
              "likes": 3,
              "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
              "replies": [],
              "reply_to": null,
            },
          ]
        }
      ]

    getVideos() {
      return this.videos;
    }
}