import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterPipe implements PipeTransform {

  transform(peliculas: any[], searchText: string): any[] {
    
    if (!peliculas){
      return [];
    }

    if (!searchText){
      return peliculas;  
    }

    searchText = searchText.toLocaleLowerCase();

    return peliculas.filter( pelicula => {
          return pelicula.Title.toLocaleLowerCase().includes(searchText);
    });

  }

}
