import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  name : string = "Fernando";
  surname: string = "Freije Fuente";

  @Output() showName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showNameEvent() {
    this.showName.emit(this.name);
  }

  showSurnameEvent() {
    this.showName.emit(this.surname);
  }

}
