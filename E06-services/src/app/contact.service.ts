import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {

public contactList: Contact[] =  [
      new Contact("Gonzalo","Menendez","985277429"),
      new Contact("Fernando","Freije","985456456"),
      new Contact("Pablo","Roncero","985456423"),
      new Contact("Pablo","Garcia","985546544"),
      new Contact("Nico","Pascu","985789878")];

  constructor() { }

  eliminar(c:Contact){
    this.contactList.splice(this.contactList.indexOf(c),1);
  }

  eliminarNumber(telephoneNumberEliminar: string){
    for (let contact of this.contactList){
      if (contact.telefono===telephoneNumberEliminar)
        this.contactList.splice(this.contactList.indexOf(contact),1);
    }
  }

  add(nombreAdd: string, apellidoAdd: string, telefonoAdd: string ){
   this.contactList.push(new Contact(nombreAdd,apellidoAdd,telefonoAdd))
  }

}
