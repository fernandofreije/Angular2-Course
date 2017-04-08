import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';

  nombre:string;
  apellidos:string;
  email:string;
  telefono:number;

  onSubmit(){
    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.email);
    console.log(this.telefono);
  }
}
