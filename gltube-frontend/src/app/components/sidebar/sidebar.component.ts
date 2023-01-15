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
        "icon": "fa-solid fa-house",
        "label": "Home",
        "url": "/",
        "selected": false
      },
      {
        "icon": "fa-solid fa-display",
        "label": "Subscriptions",
        "url": "/",
        "selected": false,
      },
      ]
    },
    {
      "items": [
        {
          "icon": "fa-solid fa-film",
          "label": "Create",
          "url": "/",
          "selected": false
        },
        {
          "icon": "fa-solid fa-clock-rotate-left",
          "label": "History",
          "url": "/",
          "selected": false
        },
        {
          "icon": "fa-solid fa-list-ul",
          "label": "My list",
          "url": "/",
          "selected": false
        },
        {
          "icon": "fa-solid fa-thumbs-up",
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

