import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';

@Injectable()
export class MensajeService {

  list : Mensaje[] = [];

  constructor() {
    this.list.push(new Mensaje(0,"Mensaje 0","Texto del Mensaje 0"));
    this.list.push(new Mensaje(1,"Mensaje 1","Texto del Mensaje 1"));
    this.list.push(new Mensaje(2,"Mensaje 2","Texto del Mensaje 2"));
    this.list.push(new Mensaje(3,"Mensaje 3","Texto del Mensaje 3"));
   }

   getMessages() : Mensaje[]{
     return this.list;
   }

   getMessage(idparam: number) : Mensaje{
     return this.list.find(m=>m.id==idparam);
   }

}
