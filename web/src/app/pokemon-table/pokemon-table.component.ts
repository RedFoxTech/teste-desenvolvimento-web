import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Pokemon, DefaultResponse } from '../pokemon';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {

  model: any;
  pokemons: Pokemon[]
  defaultResponse$: Observable<DefaultResponse>
  page = 1;
  pageSize = 10;
  collectionSize;

  constructor(private api: ApiService) { }
  
  
  ngOnInit(): void {
    this.reloadContent()
  }

  reloadContent() {
    this.defaultResponse$ = this.api.getAllPokemons(this.page, this.pageSize)

    this.defaultResponse$.subscribe(data => {
      this.pokemons = data.results
      this.collectionSize = data.count
      
    })
  }


}
