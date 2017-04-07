import { Component, OnInit } from '@angular/core';
import {MensajeService} from './../mensaje.service'
import {Mensaje} from './../mensaje'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(private service: MensajeService) {
   }
  
  getMessages() : Mensaje[]{
    return this.service.getMessages();
  }

  ngOnInit() {
  }

}
