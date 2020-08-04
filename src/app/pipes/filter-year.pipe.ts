import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterYear'
})
export class FilterYearPipe implements PipeTransform {

  transform(peliculas: any[], searchYear: string): any[] {
    
    if (!peliculas){
      return [];
    }

    if (!searchYear){
      return peliculas;  
    }

    return peliculas.filter( pelicula => {
          return pelicula.Year === searchYear;
    });

  }

}