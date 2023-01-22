import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor (private router: Router) {}

  isSidebarExpanded = false;
  selectedItem = 0;

  items_list = [
    {
      "items": [
      {
        "icon": "assets/house.svg",
        "label": "Home",
        "url": "/",
        "selected": true
      },
      {
        "icon": "assets/display.svg",
        "label": "Subscriptions",
        "url": "/subscriptions",
        "selected": false,
      },
      ]
    },
    {
      "items": [
        {
          "icon": "assets/camera.svg",
          "label": "Create",
          "url": "/create",
          "selected": false
        },
        {
          "icon": "assets/clock-history.svg",
          "label": "History",
          "url": "/history",
          "selected": false
        },
        {
          "icon": "assets/list-task.svg",
          "label": "My list",
          "url": "/my_list",
          "selected": false
        },
        {
          "icon": "assets/hand-thumbs-up.svg",
          "label": "Liked videos",
          "url": "/liked_videos",
          "selected": false
        }
      ]
    },
  ]

  handleSelectItem(listInd: number, itemInd: number) {
    this.isSidebarExpanded = false;
    this.items_list[0].items.map(x => x.selected = false);
    this.items_list[1].items.map(x => x.selected = false);
    this.items_list[listInd].items[itemInd].selected = true;
    this.router.navigate([this.items_list[listInd].items[itemInd].url]);
  }
}

