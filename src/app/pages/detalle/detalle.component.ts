import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass']
})
export class DetalleComponent implements OnInit {

  pelicula:any;
  loading: boolean;

  constructor( public _omdbS: OmdbApiService,
               public route: ActivatedRoute ) {
      
      this.loading = true;
                 
      this.route.params.subscribe( parametros =>{
        console.log(parametros);
        this._omdbS.detallesPelicula( parametros['id'] )
                    .subscribe( pelicula => {
                      this.pelicula = pelicula;
                      console.log( pelicula );
                      this.loading = false;
                    });
         
      })

  }

  ngOnInit(): void {
  }

}
