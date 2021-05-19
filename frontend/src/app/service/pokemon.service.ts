import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/model/pokemon.model';

//import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  baseUrl = environment.APP_URL
  

  constructor(private http: HttpClient) {  }

  read(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl)
  }

}
