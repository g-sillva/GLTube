import { Component } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  comments = [
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

  quantity = this.getCommentsQuantity();
  isRepliesOpen = false;

  getCommentsQuantity() {
    let s = this.comments.length;
    this.comments.forEach(x => s += x.replies.length);
    return s;
  }

  handleShowReplies(ev: any) {
    this.isRepliesOpen = ev;
  }

  handleSuccessClick() {
    console.log("Hi");
  }

}
