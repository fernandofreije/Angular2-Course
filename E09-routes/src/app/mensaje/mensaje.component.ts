import { Component, OnInit } from '@angular/core';
import {MensajeService} from './../mensaje.service'
import {Mensaje} from './../mensaje'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  mensaje : Mensaje;

  constructor(private service: MensajeService, private route: ActivatedRoute) {   
  }

  ngOnInit() {
   this.mensaje = this.service.getMessage(this.route.snapshot.data["id"]);
  }

}
