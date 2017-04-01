import { Component, OnInit } from '@angular/core';
import { Contact } from './../contact';
import { ContactService } from './../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  displayText = 'show-class';
  visible = true;

  telephoneNumberEliminar: string;

  nombreAdd: string;
  apellidoAdd: string;
  telefonoAdd: string;
  

  constructor(private service: ContactService){}

 getContactList(){
   return this.service.contactList;
  }

  eliminar(c:Contact){
    this.service.eliminar(c);
  }

  eliminarNumber(){
    this.service.eliminarNumber(this.telephoneNumberEliminar);
  }

  add(){
    this.service.add(this.nombreAdd,this.apellidoAdd,this.telefonoAdd);
  }
  
  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

  ngOnInit() {
  }

}
