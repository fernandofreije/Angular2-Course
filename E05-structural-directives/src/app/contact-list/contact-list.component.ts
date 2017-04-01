import { Component, OnInit } from '@angular/core';
import { Contact } from './../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Contact[] =  [
      new Contact("Gonzalo","Menendez","985277429"),
      new Contact("Fernando","Freije","985456456"),
      new Contact("Pablo","Roncero","985456423"),
      new Contact("Pablo","Garcia","985546544"),
      new Contact("Nico","Pascu","985789878")];

  displayText = 'show-class';
  visible = true;

  telephoneNumberEliminar: string;

  nombreAdd: string;
  apellidoAdd: string;
  telefonoAdd: string;
  
  constructor() { 
  }

  eliminar(c:Contact){
    this.contactList.splice(this.contactList.indexOf(c),1);
  }

  eliminarNumber(){
    for (let contact of this.contactList){
      if (contact.telefono===this.telephoneNumberEliminar)
        this.contactList.splice(this.contactList.indexOf(contact),1);
    }

   
  }

  add(){
   this.contactList.push(new Contact(this.nombreAdd,this.apellidoAdd,this.telefonoAdd))
    }
  
  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

  ngOnInit() {
  }

}
