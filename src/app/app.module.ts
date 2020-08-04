import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';

// Pipe
import { PeliculaPosterPipe } from './pipes/pelicula-poster.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterYearPipe } from './pipes/filter-year.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { Status404Component } from './pages/status404/status404.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PeliculaComponent } from './shared/pelicula/pelicula.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoComponent,
    DetalleComponent,
    Status404Component,
    NavbarComponent,
    PeliculaComponent,
    PeliculaPosterPipe,
    FilterPipe,
    FilterYearPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
