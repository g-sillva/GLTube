import { Component } from '@angular/core';

@Component({
  selector: 'tags-filter-component',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent {

  selectedTag = 0;
  tags = ["All", "Music", "Comedy"];

  handleSelectTag(i: number) {
    this.selectedTag = i;
  }
}
