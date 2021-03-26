import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
const url = "http://localhost:3000/pokemons/";
const urltofilter = "http://localhost:3000/pokemons"
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  constructor(private http: HttpClient) { }
  
  // done
  getFilteredPokemons(name:string,type1:string,type2:string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('Name',name);
    httpParams = httpParams.set('Type_1',type1);
    httpParams = httpParams.set('Type_2',type2);
    console.log(httpParams);
    return this.http.get<any>(urltofilter,{params: httpParams});
  }
  
  // done
  getAllPokemon(page: number){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page',page.toString());
    httpParams= httpParams.set('_limit','18');
    return this.http.get<any>(url,{params: httpParams});
  }
  
  // done
  getFilteredPokemonsByName(name:string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('Name',name);
    console.log(httpParams);
    return this.http.get<any>(urltofilter,{params: httpParams});
  }
  
  // done
  getFilteredPokemonsByNameandType1(name:string,type:string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('Name',name);
    httpParams = httpParams.set('Type_1',type);
    console.log(httpParams);
    return this.http.get<any>(urltofilter,{params: httpParams});
  }
  
  //done
  getFilteredPokemonsByNameandType2(name:string,type:string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('Name',name);
    httpParams = httpParams.set('Type_2',type);
    console.log(httpParams);
    return this.http.get<any>(urltofilter,{params: httpParams});
  }

  // done
  getFilteredPokemonsByType1(type:string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('Type_1',type);
    console.log(httpParams);
    return this.http.get<any>(urltofilter,{params: httpParams});
  }

  // done
  getFilteredPokemonsByType2(type:string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('Type_2',type);
    console.log(httpParams);
    return this.http.get<any>(urltofilter,{params: httpParams});
  }

  // done
  getFilteredPokemonsByType1and2(type1:string,type2:string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('Type_1',type1);
    httpParams = httpParams.set('Type_2',type2);
    console.log(httpParams);
    return this.http.get<any>(urltofilter,{params: httpParams});
  }



  getSprites(id:String){
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  }
}
