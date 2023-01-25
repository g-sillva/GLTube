import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderProfileComponent } from './components/header/profile/profile.component';
import { ThousandSuffixPipe } from './pipes/ThousandSufixPipe.pipe';
import { SearchbarComponent } from './components/header/searchbar/searchbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BasicCardComponent } from './components/cards/basic-card/basic-card.component';
import { SuggestedVideosComponent } from './components/suggested-videos/suggested-videos.component';
import { PopBigCardComponent } from './components/cards/pop-big-card/pop-big-card.component';
import { PopularVideosComponent } from './components/popular-videos/popular-videos.component';
import { TagsFilterComponent } from './components/suggested-videos/tags-filter/tags-filter.component';
import { VideoPage } from './pages/video/video.page';
import { VideoSugCardComponent } from './components/cards/video-sug-card/video-sug-card.component';
import { HomePage } from './pages/home-page/home.page';
import { VideosServices } from './services/videos.services';
import { ProfilesServices } from './services/profiles.services';
import { CommonModule } from '@angular/common';
import { ProfilePage } from './pages/profile/profile.page';
import { ProfileVideosContainerComponent } from './components/profile-videos-container/profile-videos-container.component';
import { VideoCommentsComponent } from './components/video-comments/video-comments.component';
import { CommentCardComponent } from './components/video-comments/comment-card/comment-card.component';
import { AddCommentComponent } from './components/video-comments/add-comment/add-comment.component';
import { VideoDescriptionComponent } from './components/video-description/video-description.component';
import { VideoMainComponent } from './components/video-main/main.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderProfileComponent,
    ThousandSuffixPipe,
    SearchbarComponent,
    SidebarComponent,
    BasicCardComponent,
    SuggestedVideosComponent,
    PopBigCardComponent,
    PopularVideosComponent,
    TagsFilterComponent,
    VideoMainComponent,
    VideoDescriptionComponent,
    VideoSugCardComponent,
    VideoCommentsComponent,
    CommentCardComponent,
    AddCommentComponent,
    ProfileVideosContainerComponent,
    ProfilePage,
    HomePage,
    VideoPage,
    ProfileAboutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [VideosServices, ProfilesServices],
  bootstrap: [AppComponent],
})
export class AppModule { }
