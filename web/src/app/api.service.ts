import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { DefaultResponse, InsertResponse, DeleteResponse } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  getAllPokemons(page, limit): Observable<DefaultResponse> {
    return this.http.get<DefaultResponse>('http://localhost:3000/pokemons', {
      params: {page, limit}
    }).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  getPokemons(query, page, limit): Observable<DefaultResponse> {
    return this.http.post<DefaultResponse>('http://localhost:3000/pokemons?page=' + page + '&limit=' + limit, query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  getPokemonByName(query): Observable<DefaultResponse> {
    return this.http.post<DefaultResponse>('http://localhost:3000/pokemons/name', query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  updatePokemon(query): Observable<DefaultResponse> {
    return this.http.put<DefaultResponse>('http://localhost:3000/pokemons', query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  insertPokemon(query): Observable<InsertResponse> {
    return this.http.put<InsertResponse>('http://localhost:3000/pokemons/new', query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  deletePokemon(query): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/pokemons?id=' + query._id).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }
}
