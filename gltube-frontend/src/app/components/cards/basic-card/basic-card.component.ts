import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'basic-card-component',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {

  @Input() video: any;
}
