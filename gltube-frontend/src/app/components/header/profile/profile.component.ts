import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  isProfileModalOpen = false;
  isUserLogged = true;

  user_username = "Mateus Andrade"
  user_followers: number = 1200;
  user_videos = 37;
  user_channel_url = "";
  user_profile_picture = 'assets/user-icon.png';

  handleProfileClick() {
    this.isProfileModalOpen = !this.isProfileModalOpen;
  }

  getImage() {
    if (this.isUserLogged) {
      this.user_profile_picture = "https://i.pinimg.com/236x/08/53/37/085337bd3b8103cb15cf3a8c0b61701e.jpg";
    }
    return this.user_profile_picture;
  }
}
