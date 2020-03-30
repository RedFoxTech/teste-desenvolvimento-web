import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../material.module";

import { PokemonListComponent } from "@components/pokemon-list/pokemon-list.component";
import { DialogPokemonTypesComponent } from "@components/dialog-pokemon-types/dialog-pokemon-types.component";
import { DialogWeathersComponent } from "@components/dialog-weathers/dialog-weathers.component";
import { DialogRemovePokemon } from "@components/dialog-remove-pokemon/dialog-remove-pokemon.component";
import { LoadingBackdropComponent } from "@components/loading-backdrop/loading-backdrop.component";

@NgModule({
  declarations: [
    PokemonListComponent,
    DialogPokemonTypesComponent,
    DialogWeathersComponent,
    DialogRemovePokemon,
    LoadingBackdropComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    PokemonListComponent,
    DialogPokemonTypesComponent,
    DialogWeathersComponent,
    DialogRemovePokemon,
    LoadingBackdropComponent
  ]
})
export class ComponentsModule {}