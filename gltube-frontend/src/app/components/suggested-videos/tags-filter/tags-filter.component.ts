import { Component, Input } from '@angular/core';

@Component({
  selector: 'tags-filter-component',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent {

  selectedTag = 0;

  @Input() tags = ["All"];

  handleSelectTag(i: number) {
    this.selectedTag = i;
  }
}
