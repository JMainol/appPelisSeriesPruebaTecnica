import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  buscar:string = "";
  peliculas: any[] = [];
  searchText: string = "";
  searchYear: string = "";
  loading: boolean;

  constructor( public _omdbS: OmdbApiService,
               public route: ActivatedRoute ) { 
    
    this.loading = true;

    this._omdbS.defaultSearch()
               .subscribe( data => {
                this.peliculas = data;
                console.log( data );
                this.loading = false;
              });

    this.route.params.subscribe( parametros =>{
      console.log(parametros);
      if( parametros['texto']){
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit(): void {
  }

  buscarPelicula(){
    
    if ( this.buscar.length == 0 ){
      return;
    }

    this.loading = true;

    this._omdbS.buscarPelicula( this.buscar )
                  .subscribe( data => {
                    this.peliculas = data;
                    console.log( data );
                    this.loading = false;
                  });
  }

}
