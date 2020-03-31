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

}
