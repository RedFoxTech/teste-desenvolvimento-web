import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokemon.service';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }

  pokemons: Pokemon[] =[]
  paginacao = 1;


  ngOnInit(): void {
    this.getPokemonAll(this.paginacao);
    
  }

  getPokemonAll(pagina:number){
    this.pokemons = []
    this.pokemonService.getAllPokemon(pagina).subscribe((res:Pokemon[])=>{
      this.pokemons = res
    },(error)=>{
      console.log(error)
    })
  }
  getSprite(id:String){
    let spriteurl =""
  spriteurl = this.pokemonService.getSprites(id);
  return spriteurl;  
  }

  proxPagina(){
    this.paginacao++;
    
    this.pokemons = []
    this.getPokemonAll(this.paginacao);
  }

  voltarPagina(){
    if(this.paginacao == 1){
      return
    }else{
      this.paginacao--;
      // this.indexatual =- 19;
     
      this.getPokemonAll(this.paginacao);
    }
  }

 

}
