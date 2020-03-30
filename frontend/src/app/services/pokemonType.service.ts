import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PokemonType } from "@models/pokemonType.model";

@Injectable({
  providedIn: "root"
})
export class PokemonTypeService {
  private baseurl = "http://localhost:81";
  constructor(private httpClient: HttpClient) {}

  public getPokemonTypes(): Observable<PokemonType[]> {
    const url = `${this.baseurl}/types/`;
    return this.httpClient.get<PokemonType[]>(url);
  }

  public getPokemonTypeById(id: number): Observable<PokemonType> {
    const url = `${this.baseurl}/type/id/${id}`;
    return this.httpClient.get<PokemonType>(url);
  }

  public getPokemonTypeByName(name: string): Observable<PokemonType[]> {
    const url = `${this.baseurl}/type/name/${name}`;
    return this.httpClient.get<PokemonType[]>(url);
  }

  public updatePokemonType(id: number, pokemonType: PokemonType): Observable<any> {
    const url = `${this.baseurl}/type/${id}`;
    return this.httpClient.patch<any>(url, pokemonType);
  }

  public deletePokemonType(id: number): Observable<any> {
    const url = `${this.baseurl}/type/${id}`;
    return this.httpClient.delete<any>(url);
  }
}