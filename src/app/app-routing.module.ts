import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { Status404Component } from './pages/status404/status404.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'listado/:texto', component: ListadoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: Status404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
