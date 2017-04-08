import { Component, OnInit } from '@angular/core';
import {ProfileService} from './../profile.service';
import {Profile} from './../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;

  constructor(private service: ProfileService) { 
  }

  ngOnInit() {
    this.service.getUsers().subscribe(profile=>this.profile=profile)
    ;
  }

}
