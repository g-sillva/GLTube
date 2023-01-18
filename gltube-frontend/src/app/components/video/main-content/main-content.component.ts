import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-content-component',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  @Input() video_src = "";

  @Input() title = "Como Memorizar e Aprender mais - Método de Revisão 3D";

  @Input() author_prof_img = "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg";

  @Input() author_username = "Mateus Andrade";

  @Input() author_followers = 1239;

  @Input() views = 231;

  @Input() likes = 42;
}
