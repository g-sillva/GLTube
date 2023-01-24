import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home.page';
import { ProfilePage } from './pages/profile/profile.page';
import { VideoPage } from './pages/video/video.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'video/:id', component: VideoPage },
  { path: 'profile/:id', component: ProfilePage },
  { path: '**', component: HomePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
