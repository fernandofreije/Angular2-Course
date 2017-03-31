import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name : string = "Fernando";
  surname: string = "Freije Fuente";

  constructor() { }

  ngOnInit() {
  }

}
