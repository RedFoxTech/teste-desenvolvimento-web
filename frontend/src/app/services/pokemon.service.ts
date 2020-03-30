import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pokemon } from "@models/pokemon.model";
import { PokemonType } from "@models/pokemonType.model";
import { Weather } from "@models/weather.model";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private baseurl = "http://localhost:81";
  constructor(private httpClient: HttpClient) {}

  public createPokemon(pokemon: Pokemon): Observable<any> {
    let url = `${this.baseurl}/pokemon`;
    return this.httpClient.post<any>(url, pokemon);
  }
  
  public getPokemons(offset?, limit?): Observable<Pokemon[]> {
    let url = `${this.baseurl}/pokemons`;
    if (offset && limit)
      url = `${url}?offset=${offset}&limit=${limit}`;
    return this.httpClient.get<Pokemon[]>(url);
  }

  public getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.baseurl}/pokemon/id/${id}`;
    return this.httpClient.get<Pokemon>(url)
  }

  public getPokemonByName(name: string): Observable<Pokemon[]> {
    const url = `${this.baseurl}/pokemon/name/${name}`;
    return this.httpClient.get<Pokemon[]>(url);
  }

  public getPokemonCount(): Observable<any> {
    const url = `${this.baseurl}/pokemon/count`;
    return this.httpClient.get<any>(url);
  }

  public updatePokemon(id: number, pokemon: Pokemon): Observable<any> {
    const url = `${this.baseurl}/pokemon/${id}`;
    return this.httpClient.patch<any>(url, pokemon);
  }

  public deletePokemon(id: number): Observable<any> {
    const url = `${this.baseurl}/pokemon/${id}`;
    return this.httpClient.delete<any>(url);
  }
}