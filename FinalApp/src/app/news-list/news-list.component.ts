import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';
import { New } from './../new';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

 public list : Array<New> = new Array<New>();

  constructor(private service: NewsService) { 
    this.getNewsList();
  }

  ngOnInit() {
  }

  getNewsList(){
    return this.service.getNews().subscribe(list=>this.list=list);
  }

}
