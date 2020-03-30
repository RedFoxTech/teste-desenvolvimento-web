import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";

import { ComponentsModule } from "@components/components.module";

import { HomePage } from "@pages/home/home.page";
import { PokemonPage } from "@pages/pokemon/pokemon.page";
import { NewPage } from "@pages/new/new.page";

@NgModule({
  declarations: [ HomePage, PokemonPage, NewPage ],
  imports: [ CommonModule, MaterialModule, FormsModule, ComponentsModule ],
  exports: [ HomePage, PokemonPage, NewPage ]
})
export class PagesModule {}