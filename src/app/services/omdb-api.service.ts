import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private apiKey: string = 'apikey=616e9494';
  private urlRoot: string = 'http://www.omdbapi.com/?';

  // peliculas: any[] = [];

  constructor( private http: HttpClient ) { }

  defaultSearch(){
    return this.http.get(`${ this.urlRoot }${ this.apiKey }&s=star`)
                                          .pipe(
                                            map( data => {
                                                return data['Search'];
                                            })
                                          )
  }

  buscarPelicula( texto: string){

      return this.http.get(`${ this.urlRoot }${ this.apiKey }&s=${ texto }`)
                  .pipe(
                    map( data =>{
                      return data['Search']
                    })
                  )
  }

  detallesPelicula( id: string ){
    return this.http.get(`${ this.urlRoot }i=${ id }&${ this.apiKey }`);
  }

}


// http://www.omdbapi.com/?apikey=616e9494&s=batman
// http://www.omdbapi.com/?i=tt0076759
