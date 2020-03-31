import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../material.module";

import { PokemonListComponent } from "@components/pokemon-list/pokemon-list.component";
import { DialogPokemonTypesComponent } from "@components/dialog-pokemon-types/dialog-pokemon-types.component";
import { DialogWeathersComponent } from "@components/dialog-weathers/dialog-weathers.component";
import { DialogRemovePokemon } from "@components/dialog-remove-pokemon/dialog-remove-pokemon.component";
import { DialogRemoveGeneric } from "@components/dialog-remove-generic/dialog-remove-generic.component";
import { DialogAddGeneric } from "@components/dialog-add-generic/dialog-add-generic.component";
import { DialogAddFilterComponent } from "@components/dialog-add-filter/dialog-add-filter.component";
import { LoadingBackdropComponent } from "@components/loading-backdrop/loading-backdrop.component";

@NgModule({
  declarations: [
    PokemonListComponent,
    DialogPokemonTypesComponent,
    DialogWeathersComponent,
    DialogRemovePokemon,
    DialogRemoveGeneric,
    DialogAddGeneric,
    DialogAddFilterComponent,
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
    DialogRemoveGeneric,
    DialogAddGeneric,
    DialogAddFilterComponent,
    LoadingBackdropComponent
  ]
})
export class ComponentsModule {}