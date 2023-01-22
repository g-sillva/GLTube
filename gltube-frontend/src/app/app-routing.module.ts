import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VideoComponent } from './pages/video/video.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [ProfileComponent],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
