import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { Pokemon } from "@models/pokemon.model";
import { PokemonService } from "@services/pokemon.service";
import { PokemonType } from "@models/pokemonType.model";
import { PokemonTypeService } from "@services/pokemonType.service";
import { Weather } from "@models/weather.model";
import { WeatherService } from "@services/weather.service";

import { DialogPokemonTypesComponent } from "@components/dialog-pokemon-types/dialog-pokemon-types.component";
import { DialogWeathersComponent } from "@components/dialog-weathers/dialog-weathers.component";
import { DialogRemovePokemon } from "@components/dialog-remove-pokemon/dialog-remove-pokemon.component";

@Component({
  selector: "pokemon-page",
  templateUrl: "./pokemon.page.html",
  styleUrls: ["./pokemon.page.css"]
})
export class PokemonPage implements OnInit {
  pageLoading: boolean;
  currentPokemon: Pokemon;
  pokemonTypes: PokemonType[];
  weathers: Weather[];
  editMode: boolean = false;

  get pokemonTypeOne() {
    const typeOne = this.currentPokemon.typeOne;
    if (typeof(typeOne) === "number") {
      return this.pokemonTypes[typeOne - 1].name
    } else {
      return this.currentPokemon.typeOne;
    }
  }

  get pokemonTypeTwo() {
    const typeTwo = this.currentPokemon.typeTwo;
    if (typeof(typeTwo) === "number") {
      return this.pokemonTypes[typeTwo - 1].name
    } else {
      return this.currentPokemon.typeTwo;
    }
  }

  get pokemonWeatherOne() {
    const weatherOne = this.currentPokemon.weatherOne;
    if (typeof(weatherOne) === "number") {
      return this.weathers[weatherOne - 1].name;
    } else {
      return this.currentPokemon.weatherOne
    }
  }

  get pokemonWeatherTwo() {
    const weatherTwo = this.currentPokemon.weatherTwo;
    if (typeof(weatherTwo) === "number") {
      return this.weathers[weatherTwo - 1].name;
    } else {
      return this.currentPokemon.weatherTwo
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private pokemonService: PokemonService,
    private pokemonTypeService: PokemonTypeService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.pageLoading = true;
    const paramValue: string = this.route.snapshot.paramMap.get("id");
    const pokemonId: number = parseInt(paramValue) || 1;
    this.pokemonService.getPokemonById(pokemonId)
      .subscribe(pokemon => {
        this.currentPokemon = pokemon;
        this.pokemonTypeService.getPokemonTypes()
          .subscribe(types => {
            this.pokemonTypes = types
            this.weatherService.getWeathers()
              .subscribe(weathers => {
                this.weathers = weathers
                this.pageLoading = false;
              });
          });
      });
  }

  parseArray(typeArray = []) {
    return typeArray.filter(item => item).join(", ");
  }

  parseBoolean(value: boolean) {
    return value ? "Yes" : "No";
  }

  confirmChanges() {
    this.editMode = false;
    this.pageLoading = true;
    const { id } = this.currentPokemon;
    this.pokemonService.updatePokemon(id, this.currentPokemon)
      .subscribe(() => this.pageLoading = false);
  }

  openTypesDialog() {
    const ref = this.dialog.open(DialogPokemonTypesComponent, {
      width: "250px",
      data: this.pokemonTypes
    });

    ref.afterClosed()
      .subscribe(result => {
        if (result) {
          if (result.typeOne)
            this.currentPokemon.typeOne = result.typeOne
          if (result.typeTwo && result.typeTwo !== 0) {
            this.currentPokemon.typeTwo = result.typeTwo
          } else {
            this.currentPokemon.typeTwo = null;
          }
        }
      });
  }

  openWeathersDialog() {
    const ref = this.dialog.open(DialogWeathersComponent, {
      width: "250px",
      data: this.weathers
    });

    ref.afterClosed()
      .subscribe(result => {
        if (result) {
          if (result.weatherOne)
            this.currentPokemon.weatherOne = result.weatherOne
          if (result.weatherTwo && result.weatherTwo !== 0) {
            this.currentPokemon.weatherTwo = result.weatherTwo
          } else {
            this.currentPokemon.weatherTwo = null;
          }
        }
      });
  }

  openRemovePokemonDialog() {
    const ref = this.dialog.open(DialogRemovePokemon, {
      width: "250px",
      data: this.currentPokemon
    });

    ref.afterClosed()
      .subscribe(remove => {
        if (remove) {
          this.pageLoading = true;
          this.pokemonService.deletePokemon(this.currentPokemon.id)
            .subscribe(() => {
              this.pageLoading = false;
              this.router.navigateByUrl("/");
            });
        }
      })
  }
}