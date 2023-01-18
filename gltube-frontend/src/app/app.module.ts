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
import { VideoComponent } from './components/video/video.component';
import { MainContentComponent } from './components/video/main-content/main-content.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
