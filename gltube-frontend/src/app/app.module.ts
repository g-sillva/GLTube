import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/header/profile/profile.component';
import { ThousandSuffixPipe } from './pipes/ThousandSufixPipe.pipe';
import { SearchbarComponent } from './components/header/searchbar/searchbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BasicCardComponent } from './components/cards/basic-card/basic-card.component';
import { SuggestedVideosComponent } from './components/suggested-videos/suggested-videos.component';
import { PopBigCardComponent } from './components/cards/pop-big-card/pop-big-card.component';
import { PopularVideosComponent } from './components/popular-videos/popular-videos.component';
import { TagsFilterComponent } from './components/suggested-videos/tags-filter/tags-filter.component';
import { VideoComponent } from './pages/video/video.component';
import { MainContentComponent } from './pages/video/main-content/main-content.component';
import { VideoDescriptionComponent } from './pages/video/video-description/video-description.component';
import { VideoSugCardComponent } from './components/cards/video-sug-card/video-sug-card.component';
import { CommentsComponent } from './pages/video/comments/comments.component';
import { CommentCardComponent } from './pages/video/comments/comment-card/comment-card.component';
import { AddCommentComponent } from './pages/video/comments/add-comment/add-comment.component';
import { HomeComponent } from './pages/home/home.component';
import { VideosServices } from './services/videos.services';
import { ProfilesServices } from './services/profiles.services';
import { VideosComponent } from './pages/profile/videos/videos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ThousandSuffixPipe,
    SearchbarComponent,
    SidebarComponent,
    BasicCardComponent,
    SuggestedVideosComponent,
    PopBigCardComponent,
    PopularVideosComponent,
    TagsFilterComponent,
    VideoComponent,
    MainContentComponent,
    VideoDescriptionComponent,
    VideoSugCardComponent,
    CommentsComponent,
    CommentCardComponent,
    AddCommentComponent,
    HomeComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [VideosServices, ProfilesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
