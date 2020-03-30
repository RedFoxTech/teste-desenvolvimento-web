import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InicioPage } from "@pages/inicio/inicio.page";
import { PokemonPage } from "@pages/pokemon/pokemon.page";

const routes: Routes = [
  { path: "pokemon/:id", component: PokemonPage },
  { path: "", component: InicioPage }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true })],
  exports: [RouterModule]
})
export class RoutingModule {}