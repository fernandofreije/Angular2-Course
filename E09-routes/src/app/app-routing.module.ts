import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent} from './perfil/perfil.component';
import { MensajesComponent} from './mensajes/mensajes.component';
import { MensajeComponent} from './mensaje/mensaje.component';
import { ErrorComponent} from './error/error.component';

const routes: Routes = [
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path: 'mensajes', component: MensajesComponent  
  },
  {
    path: 'mensajes/:id', component: MensajeComponent  
  },
  {
    path: '**', component: ErrorComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
