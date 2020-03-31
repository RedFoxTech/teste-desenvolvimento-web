import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";

import { Pokemon } from "@models/pokemon.model";
import { PokemonService } from "@services/pokemon.service";
import { PokemonTypeService } from "@services/pokemonType.service";
import { WeatherService } from "@services/weather.service";

import { FilterOption, FILTER_OPTIONS } from "./filter";

import { DialogAddFilterComponent } from "@components/dialog-add-filter/dialog-add-filter.component";

@Component({
  selector: "search-page",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.css"]
})
export class SearchPage implements OnInit {
  pageLoading: boolean = false;
  foundPokemonList: Pokemon[] = [];
  filterOptions: FilterOption[] = [...FILTER_OPTIONS];
  currentPageIndex = 0;
  currentPageSize = 10;

  get dialogFilters() {
    return this.filterOptions.filter(option => option.selected);
  }

  constructor(
    private dialog: MatDialog,
    private pokemonService: PokemonService,
    private pokemonTypeService: PokemonTypeService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.pageLoading = true;
    this.pokemonTypeService.getPokemonTypes()
      .subscribe(types => {
        this.filterOptions[8].option = types;
        this.filterOptions[9].option = types;
        this.weatherService.getWeathers()
          .subscribe(weathers => {
            this.filterOptions[10].option = weathers
            this.filterOptions[11].option = weathers
            this.pageLoading = false;
          });
      });
  }

  performSearch() {
    const currentFilter = {};
    this.pageLoading = true;
    for (let filter of this.filterOptions)
      if (filter.selected && filter.value)
        currentFilter[filter.name] = filter.value

    this.pokemonService.getPokemonByFilter(currentFilter)
      .subscribe(pokemons => {
        this.foundPokemonList = pokemons
        this.pageLoading = false;
      });
  }

  openAddFilterDialog() {
    const ref = this.dialog.open(DialogAddFilterComponent, {
      width: "250px",
      data: this.filterOptions
    });

    ref.afterClosed()
      .subscribe(result => {
        this.filterOptions = result;
      })
  }

  onPaginate(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.currentPageSize = pageEvent.pageSize;
  }
}