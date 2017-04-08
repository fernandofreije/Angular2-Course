import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileService } from './profile.service';
import { NewsService } from './news.service';
import { NewsListComponent } from './news-list/news-list.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderNewsPipe } from './order-news.pipe';
import { FilterNewsPipe } from './filter-news.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ProfileComponent,
    OrderNewsPipe,
    FilterNewsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProfileService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
