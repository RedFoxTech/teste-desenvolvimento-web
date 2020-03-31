import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

import { Pokemon } from "@models/pokemon.model";
import { PokemonService } from "@services/pokemon.service";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.css"]
})
export class HomePage implements OnInit {
  pageLoading: boolean = false;
  pokemonList: Pokemon[] = [];
  currentPageIndex = 0;
  currentPageSize = 10;
  
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pageLoading= true;
    this.pokemonService.getPokemons()
      .subscribe(pokemons => {
        this.pokemonList = pokemons
        this.pageLoading = false;
      });
  }

  onPaginate(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.currentPageSize = pageEvent.pageSize;
  }

}