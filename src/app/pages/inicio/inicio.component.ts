import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {


  constructor( private _omdbS: OmdbApiService ) { 


  }

  ngOnInit(): void {
  }



}
