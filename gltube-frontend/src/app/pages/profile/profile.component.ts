import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesServices } from 'src/app/services/profiles.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile_id: any;
  profile: any;
  selected_item = 0;

  selectable_items = ["VIDEOS", "ABOUT"];

  constructor (private profile_service: ProfilesServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.profile_id = this.route.snapshot.paramMap.get("id");
    this.profile = this.profile_service.profiles.find(x => x.id == this.profile_id);
    if (this.profile === undefined) {
      this.router.navigate(["/"]);
    }
  }

  handleSelectItem(id: number) {
    this.selected_item = id;
  }
}
