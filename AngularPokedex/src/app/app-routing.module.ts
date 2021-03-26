import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'pokemon',
  pathMatch:'full'
},
{
  path:'pokemon',
  component:PokemonlistComponent
}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
