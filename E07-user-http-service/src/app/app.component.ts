import { Component } from '@angular/core';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lista personas';
  list: User[];
  constructor(private service : UserService){
   this.getUserList();
  }


  
  getUserList(){
    return this.service.getUsers().subscribe(list=>this.list=list);
  }

  refresh(){
    this.getUserList();
  }
}
