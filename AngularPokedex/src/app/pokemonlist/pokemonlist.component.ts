import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokemon.service';
import { Pokemon } from '../shared/models/pokemon';
import { TitleCasePipe } from  "@angular/common"
interface types {
  name: string,
  value?: string
}
@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  constructor(private pokemonService : PokemonService,
    public titlecase: TitleCasePipe) { }

   filters = {
    name: '',
    type1:'',
    type2:''
  }
  
poketypes : types[] = [
  {name: 'Selecione',value:''},
  {name:'bug', value:'bug'},
  {name:'dark',value:'dark'},
  {name:'dragon',value:'dragon'},
  {name:'electric',value:'electric'},
  {name:'fairy',value:'fairy'},
  {name:'fighting',value:'fighting'},
  {name:'fire',value:'fire'},
  {name:'flying',value:'flying'},
  {name:'ghost',value:'ghost'},
  {name:'grass',value:'grass'},
  {name:'ground',value:'ground'},
  {name:'ice',value:'ice'},
  {name:'normal',value:'normal'},
  {name:'poison',value:'poison'},
  {name:'psychic',value:'psychic'},
  {name:'rock',value:'rock'},
  {name:'steel',value:'steel'},
  {name:'water',value:'water'},
  
]
  open: boolean = false
  isSearching = false
  pokemons: Pokemon[] =[]
  paginacao = 1;
  isLoading:boolean= true;
  empty:boolean = false

  ngOnInit(): void {
    let audio = new Audio('assets/audio/pokemon-recovery.mp3');
    audio.play();
    this.getPokemonAll(this.paginacao);
    
  }

  getPokemonAll(pagina:number){
    this.pokemons = []
    this.pokemonService.getAllPokemon(pagina).subscribe((res:Pokemon[])=>{
      this.pokemons = res
      this.isLoading = false
      this.empty = false
    },(error)=>{
      console.log(error)
    })
  }
  getSprite(id:String){
    let spriteurl =""
  spriteurl = this.pokemonService.getSprites(id);
  return spriteurl;  
  }

  getFilteredPokemon(){
    this.pokemons = []
    this.filters.name = this.titlecase.transform(this.filters.name);
    this.isSearching = true
    this.empty = true
    if(this.filters.name == "" && this.filters.type1=='' && this.filters.type2==''){
      this.getPokemonAll(this.paginacao);
      return;
    }
    if(this.filters.name !='' && this.filters.type1 == "" && this.filters.type2 == ""){
      this.pokemonService.getFilteredPokemonsByName(this.filters.name).subscribe((res:Pokemon[])=>{
        this.pokemons = res;
       
      })
    }
    if(this.filters.name != '' && this.filters.type1!=''){
      this.pokemonService.getFilteredPokemonsByNameandType1(this.filters.name,this.filters.type1).subscribe((res:Pokemon[])=>{
        this.pokemons = res;
      });
    }
    if(this.filters.name != '' && this.filters.type1 == '' && this.filters.type2 != ''){
      this.pokemonService.getFilteredPokemonsByNameandType2(this.filters.name,this.filters.type2).subscribe((res:Pokemon[])=>{
        this.pokemons = res;
      })
    }
    if(this.filters.name !='' && this.filters.type1 !="" && this.filters.type2 != ''){
      this.pokemonService.getFilteredPokemons(this.filters.name,this.filters.type1,this.filters.type2).subscribe((res:Pokemon[])=>{
        this.pokemons = res;
      })
    }
    if(this.filters.name == '' && this.filters.type1 != "" && this.filters.type2 == ""){
      this.pokemonService.getFilteredPokemonsByType1(this.filters.type1).subscribe((res:Pokemon[])=>{
        this.pokemons = res;
      });
    }
    if(this.filters.name == '' && this.filters.type1 == "" && this.filters.type2 != ""){
      this.pokemonService.getFilteredPokemonsByType2(this.filters.type2).subscribe((res:Pokemon[])=>{
        this.pokemons = res;
      });
    }
    if(this.filters.name == '' && this.filters.type1 != "" && this.filters.type2 != ""){
      this.pokemonService.getFilteredPokemonsByType1and2(this.filters.type1,this.filters.type2).subscribe((res:Pokemon[])=>{
        this.pokemons = res;
      });
    }
    if(this.pokemons == []){
      this.empty = false
    }
    
    
  }

  clearFilters(){
    this.isSearching = false
    this.open = !this.open
    this.filters.name="";
    this.filters.type1 ='';
    this.filters.type2 ='';
    this.getPokemonAll(this.paginacao);
  }

  proxPagina(){
    this.isLoading = true
    this.paginacao++;
    
    this.pokemons = []
    this.getPokemonAll(this.paginacao);
  }

  voltarPagina(){
    this.isLoading = true
    if(this.paginacao == 1){
      return
    }else{
      this.paginacao--;
      // this.indexatual =- 19;
     
      this.getPokemonAll(this.paginacao);
    }
  }

  getTypeIcon(type:string){
    return `assets/icons/${type}.svg`
  }


 

}
