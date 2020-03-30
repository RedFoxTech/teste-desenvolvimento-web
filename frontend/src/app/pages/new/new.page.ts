import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
  selector: "new-page",
  templateUrl: "./new.page.html",
  styleUrls: ["./new.page.css"]
})
export class NewPage implements OnInit {
  pageLoading: boolean;
  currentPokemon: Pokemon;
  pokemonTypes: PokemonType[];
  weathers: Weather[];
  editMode: boolean = true;
  candidateNumber: number = 0;

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
    private router: Router,
    private dialog: MatDialog,
    private pokemonService: PokemonService,
    private pokemonTypeService: PokemonTypeService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.pageLoading = true;
    this.pokemonService.getPokemonCount()
      .subscribe(countResult => {
        this.candidateNumber = countResult.count + 1;
        this.currentPokemon = {
          name: "",
          pokedexNumber: countResult.count + 1,
        }
        this.currentPokemon.pokedexNumber = countResult.count + 1;
        this.pokemonTypeService.getPokemonTypes().subscribe(types => {
          this.pokemonTypes = types
          this.weatherService.getWeathers().subscribe(weathers => {
            this.weathers = weathers
            this.pageLoading = false;
          });
        });
      })
  }

  parseArray(typeArray = []) {
    return typeArray.filter(item => item).join(", ");
  }

  parseBoolean(value: boolean) {
    return value ? "Yes" : "No";
  }

  confirmCreation() {
    this.editMode = false;
    this.pageLoading = true;
    this.pokemonService.createPokemon(this.currentPokemon)
      .subscribe(() => {
        this.pageLoading = false;
        this.router.navigateByUrl(`/pokemon/${this.candidateNumber}`);
      });
  }

  cancelCreation() {
    this.router.navigateByUrl("/");
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