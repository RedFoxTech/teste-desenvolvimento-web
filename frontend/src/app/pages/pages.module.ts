import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";

import { ComponentsModule } from "@components/components.module";

import { HomePage } from "@pages/home/home.page";
import { PokemonPage } from "@pages/pokemon/pokemon.page";
import { NewPage } from "@pages/new/new.page";
import { SearchPage } from "@pages/search/search.page";
import { TypesPage } from "@pages/types/types.page";
import { WeathersPage } from "@pages/weathers/weathers.page";

@NgModule({
  declarations: [ HomePage, PokemonPage, NewPage, SearchPage, TypesPage, WeathersPage ],
  imports: [ CommonModule, MaterialModule, FormsModule, ComponentsModule ],
  exports: [ HomePage, PokemonPage, NewPage, SearchPage, TypesPage, WeathersPage ]
})
export class PagesModule {}