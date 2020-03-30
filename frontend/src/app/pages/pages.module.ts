import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";

import { ComponentsModule } from "@components/components.module";

import { InicioPage } from "@pages/inicio/inicio.page";
import { PokemonPage } from "@pages/pokemon/pokemon.page";

@NgModule({
  declarations: [ InicioPage, PokemonPage ],
  imports: [ CommonModule, MaterialModule, FormsModule, ComponentsModule ],
  exports: [ InicioPage, PokemonPage ]
})
export class PagesModule {}