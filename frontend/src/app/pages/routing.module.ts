import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePage } from "@pages/home/home.page";
import { PokemonPage } from "@pages/pokemon/pokemon.page";
import { NewPage } from "@pages/new/new.page";
import { SearchPage } from "@pages/search/search.page";
import { TypesPage } from "@pages/types/types.page";
import { WeathersPage } from "@pages/weathers/weathers.page";

const routes: Routes = [
  { path: "weathers", component: WeathersPage },
  { path: "types", component: TypesPage },
  { path: "search", component: SearchPage },
  { path: "new", component: NewPage },
  { path: "pokemon/:id", component: PokemonPage },
  { path: "", component: HomePage }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true })],
  exports: [RouterModule]
})
export class RoutingModule {}