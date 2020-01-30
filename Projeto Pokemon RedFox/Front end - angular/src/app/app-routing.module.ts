import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPokemonComponent } from './pages/lista-pokemon/lista-pokemon.component';
import { CadPokemonComponent } from './pages/cad-pokemon/cad-pokemon.component';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';


const routes: Routes = [
  { //Caminho padrao que redireciona para lista
    path: '', 
    pathMatch: 'prefix',  
    redirectTo: 'pokemon'
  }, 
  { //listagem de pokemons = pokemon
    path: 'pokemon', 
    component: ListaPokemonComponent
  },
  { //Cadastro de pokemons = cadPokemon
    path: 'cadPokemon',
    component: CadPokemonComponent
  },
  { //Editar pokemons = editPokemon
    path: 'editPokemon/:id',
    component: EditPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
