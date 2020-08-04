import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaPoster'
})
export class PeliculaPosterPipe implements PipeTransform {

  transform( Poster: any ): any {

    if ( Poster != 'N/A' ){
      return Poster;
    } else {
      return './assets/img/noimage.png'
    }

  }

}
