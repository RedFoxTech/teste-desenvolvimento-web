import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePage } from "@pages/home/home.page";
import { PokemonPage } from "@pages/pokemon/pokemon.page";
import { NewPage } from "@pages/new/new.page";

const routes: Routes = [
  { path: "new", component: NewPage },
  { path: "pokemon/:id", component: PokemonPage },
  { path: "", component: HomePage }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true })],
  exports: [RouterModule]
})
export class RoutingModule {}