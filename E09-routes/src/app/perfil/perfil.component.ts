import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public nombre : string = "Fernando";
  public apellidos : string = "Freije Fuente";
  public edad : number = 20;

  ngOnInit() {
  }

}
