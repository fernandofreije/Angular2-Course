import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions, Response} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  url : string = "https://randomuser.me/api/?results=5";

  constructor(private http: Http) {this.getUsers();}

  refresh(){
    this.getUsers();
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.url)
      .map(this.getData)
      .catch(this.handleError);
  }

  private getData(res: Response): User[]{
    let users: User[];
   for (let element in res.json()["results"]){
      users.push(
        new User(
          element["name"]["first"],
          element["name"]["last"],
          element["email"],
          element["picture"]["thumbnail"],
          element["phone"]));
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
