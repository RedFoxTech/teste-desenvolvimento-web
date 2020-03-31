import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DefaultResponse } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  getAllPokemons(page, limit): Observable<DefaultResponse> {
    return this.http.get<DefaultResponse>('http://localhost:3000/getAllPokemons', {
      params: {page, limit}
    }).pipe()
  }

  getPokemonByQuery(query): Observable<DefaultResponse> {
    return this.http.post<DefaultResponse>('http://localhost:3000/getPokemonsByQuery', query).pipe()
  }

  getPokemonByName(query): Observable<DefaultResponse> {
    return this.http.post<DefaultResponse>('http://localhost:3000/getPokemonByName', query).pipe()
  }

  updatePokemonByQuery(query): Observable<DefaultResponse> {
    return this.http.put<DefaultResponse>('http://localhost:3000/updatePokemonsByQuery', query).pipe()
  }
}
