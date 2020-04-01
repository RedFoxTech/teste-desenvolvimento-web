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
    return this.http.get<DefaultResponse>('http://localhost:3000/getAllPokemons', {
      params: {page, limit}
    }).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  getPokemonByQuery(query): Observable<DefaultResponse> {
    return this.http.post<DefaultResponse>('http://localhost:3000/getPokemonsByQuery', query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  getPokemonByName(query): Observable<DefaultResponse> {
    return this.http.post<DefaultResponse>('http://localhost:3000/getPokemonByName', query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  updatePokemonByQuery(query): Observable<DefaultResponse> {
    return this.http.put<DefaultResponse>('http://localhost:3000/updatePokemonsByQuery', query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  insertPokemon(query): Observable<InsertResponse> {
    return this.http.put<InsertResponse>('http://localhost:3000/insertManyPokemons', query).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }

  deletePokemon(query): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/deletePokemon?id=' + query._id).pipe(catchError(error => {
      return Observable.throw(error || "Server error")
    }))
  }
}
