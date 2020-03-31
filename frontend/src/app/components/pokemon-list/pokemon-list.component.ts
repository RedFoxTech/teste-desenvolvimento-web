import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Pokemon } from "@models/pokemon.model"

@Component({
  selector: "pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent {
  @Input() pokemonList: Pokemon[] = [];
  constructor(private router: Router) {}

  parseArray(typeArray = []) {
    return typeArray.filter(item => item).join(", ");
  }

  parseBoolean(value: boolean) {
    return value ? "Yes" : "No";
  }

  checkPokemonDetail(id: number) {
    this.router.navigateByUrl(`/pokemon/${id}`);
  }
}