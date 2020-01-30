import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cad-pokemon',
  templateUrl: './cad-pokemon.component.html',
  styleUrls: ['./cad-pokemon.component.scss']
})
export class CadPokemonComponent implements OnInit {


  url = "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }

  pokemon = {
    nomePokemon: '',
    pokedexNumber: 0,
    generation: 0,
    evolutionStage: 0,
    tipoPokemon1: '',
    tipoPokemon2: '',
    clima: '',
    ATKPokemon: 0,
    DEFPokemon: 0,
    STAPokemon: 0,
    totalStatsPokemon : 0,
    legendary: '',
    n100cp_40: 0,
    n100cp_39: 0,
    imageFilePath:'',
    editedImagePath: ''
  }

  imageFilePath:string;

  editFilePath(){
    this.pokemon.imageFilePath = this.imageFilePath;
    this.pokemon.editedImagePath = "../../assets/" + this.imageFilePath.substr(12,this.imageFilePath.length);
    console.log(this.pokemon.editedImagePath);
  }

  somarStats(){
    this.pokemon.totalStatsPokemon = this.pokemon.ATKPokemon + this.pokemon.DEFPokemon + this.pokemon.STAPokemon;
  }

  cadPokemon(){
    //CASO NAO TENHA IMAGEM
    if(this.imageFilePath == undefined){
      let modal = document.getElementById('modalImagem');
      modal.classList.add('is-active');
    }else{
      this.editFilePath();

      var req = this.http.post(this.url + "cadPokemon",this.pokemon);
      req.subscribe();

      let modal = document.getElementById('modalCadastro');
      modal.classList.add('is-active');
      this.clearForm();

    }

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
