import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

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
        "url": "/",
        "selected": false,
      },
      ]
    },
    {
      "items": [
        {
          "icon": "assets/camera.svg",
          "label": "Create",
          "url": "/",
          "selected": false
        },
        {
          "icon": "assets/clock-history.svg",
          "label": "History",
          "url": "/",
          "selected": false
        },
        {
          "icon": "assets/list-task.svg",
          "label": "My list",
          "url": "/",
          "selected": false
        },
        {
          "icon": "assets/hand-thumbs-up.svg",
          "label": "Liked videos",
          "url": "/",
          "selected": false
        }
      ]
    },
  ]

  handleSelectItem(listInd: number, itemInd: number) {
    this.isSidebarExpanded = true;
    this.items_list[0].items.map(x => x.selected = false);
    this.items_list[1].items.map(x => x.selected = false);
    this.items_list[listInd].items[itemInd].selected = true;
  }
}

