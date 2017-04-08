import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
import { New } from './new';

@Injectable()
export class NewsService {

  private endpoint: string = 'https://node-hnapi.herokuapp.com/news?page=1';

  private newsObservable: Observable<Array<New>>;
  private sortChange: Subject<string> = new Subject<string>();

  constructor(private http: Http) {
    this.newsObservable = this.http
      .get(this.endpoint)
      .map((res: Response) => res.json())
      .map((result: any) => {
        return result.map((resultNew: any) => {
          return new New(
            resultNew.id,
            resultNew.title,
            resultNew.points,
            resultNew.user,
            new Date(resultNew.time),
            resultNew.comments_count,
            resultNew.url
          )
        });
      });
  }

  getNews() {
    return this.newsObservable;
  }
  
  getSortField() {
    return this.sortChange;
  }

  setSortField(field: string) {
    this.sortChange.next(field);
  }

}