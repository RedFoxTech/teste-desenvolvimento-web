import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router) {
    this.codPokemon = this.route.snapshot.params['id'];
    var req = this.http.get(this.url + "getPokemonId/" + this.codPokemon);
    req.subscribe(res => {
      
      this.pokemon = res;
      for(let poke of this.pokemon){
        if(poke.codPokemon == this.codPokemon){
          console.log(poke);
          this.pokemon = poke;
          console.log(this.pokemon);
        }
      }
      this.somarStats();
    });
  }

  codPokemon
  url = "http://localhost:3000/";
  pokemon;


  ngOnInit() {


  }


  editarPokemon(){
    console.log(this.pokemon);
    var req = this.http.put(this.url + "updatePokemon", this.pokemon);
    req.subscribe();
    var modal = document.getElementById('modalEditado').classList.add('is-active');
    this.router.navigateByUrl('/');
  }


  imageFilePath;
  editFilePath(){
    this.pokemon.imageFilePath = this.imageFilePath;
    this.pokemon.editedImagePath = "../../assets/" + this.imageFilePath.substr(12,this.imageFilePath.length);
    console.log(this.pokemon.editedImagePath);
  }

  somarStats(){
    this.pokemon.totalStatsPokemon = this.pokemon.ATKPokemon + this.pokemon.DEFPokemon + this.pokemon.STAPokemon;
  }

  fecharModal(name){
    let modal = document.getElementById('modal' + name);
    modal.classList.remove('is-active');
  }

  clearForm(){
    var formId = 'form';
    var resetForm = <HTMLFormElement>document.getElementById(formId);
    resetForm.reset();
    console.log(this.pokemon);
  }

}
