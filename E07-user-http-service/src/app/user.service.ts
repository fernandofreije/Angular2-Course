import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions, Response} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  url : string = "https://randomuser.me/api/?results=5";

  constructor(private http: Http) {this.getUsers();}

  getUsers(): Observable<User[]> {
    return this.http.get(this.url)
      .map(this.getData)
      .catch(this.handleError);
  }

  private getData(res: Response): User[]{
   var users: User[] = [];
    for(let result of res.json()["results"]){
      users.push(
        new User(
          result["name"]["first"],
          result["name"]["last"],
          result["email"],
          result["picture"]["medium"],
          result["phone"]
        )
      );
    }
return users;
  }

  private handleError(error: Response | any){
    let errorMsg: string;
    if (error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message: error.toString();
   }
      console.error(errorMsg);
      return Observable.throw(errorMsg);
    }
  }
