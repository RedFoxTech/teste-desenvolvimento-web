import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
const url = "http://localhost:3000/pokemons/"
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemon(page: number){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page',page.toString());
    httpParams= httpParams.set('_limit','18');
    return this.http.get<any>(url,{params: httpParams});
  }

  getSprites(id:String){
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  }
}
