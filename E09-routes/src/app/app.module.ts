import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {MensajeService} from './mensaje.service';
import { PerfilComponent } from './perfil/perfil.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ErrorComponent } from './error/error.component';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    MensajesComponent,
    ErrorComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
