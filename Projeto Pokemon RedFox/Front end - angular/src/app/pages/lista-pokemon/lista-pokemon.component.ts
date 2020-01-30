import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {

  constructor(private http:HttpClient, private route:Router) { 
    
  }
  
  pokemons;
  pokemon;
  url = "http://localhost:3000/";
  ngOnInit() {
    this.start();
  }
  paginaAtual = 1;
  
  start(){
    var req = this.http.get(this.url + "getPokemons");
    req.subscribe(data => {
      
      this.pokemons = data;
      if(data == null || data == undefined){
        this.start();
      }
      for(let poke of this.pokemons){
        poke.totalStatsPokemon = poke.ATKPokemon + poke.DEFPokemon + poke.STAPokemon;
      }
      this.pokemon = this.pokemons[0];
      console.log(this.pokemons[0]);
    },err => {
      console.log(err);
    })
  }

  paramSearchPokemon;
  searchPokemon(){
    console.log(this.paramSearchPokemon);
    if(this.paramSearchPokemon != ''){
      var req = this.http.get(this.url + "getPokemons/" + this.paramSearchPokemon);
      req.subscribe(res => {
        this.pokemons = res;
        
      })
    }else{
      var req = this.http.get(this.url + "getPokemons");
      req.subscribe(data => {
        
        this.pokemons = data;
        if(data == null || data == undefined){
          this.start();
        }
      });
    }
  }

  limparSearch(){
    this.paramSearchPokemon = '';
    this.start();
    var req = this.http.get(this.url + 'getPokemons');
    req.subscribe(res => {
      this.pokemons = res;
      console.log(this.pokemons);
    });
  }

  delPokemon(id){
    var req = this.http.delete(this.url + "delPokemon/" + id);
    req.subscribe();

    var modal = document.getElementById("modalApagar");
    modal.classList.remove('is-active');

    this.start();
  }

  fecharModal(name){
    var modal = document.getElementById("modal" + name);
    modal.classList.remove('is-active');
  }

  abrirModal(name){
    var modal = document.getElementById("modal" + name);
    modal.classList.add('is-active');
  }

  abrirPokemon(id){
    for(let poke of this.pokemons){
      if(poke.codPokemon == id){
        this.pokemon = poke;
        console.log(poke);
        console.log(this.pokemon);
      }
    }
  }

  editarPokemon(id){
    this.route.navigate(['/editPokemon/' + id]);
  }

}
