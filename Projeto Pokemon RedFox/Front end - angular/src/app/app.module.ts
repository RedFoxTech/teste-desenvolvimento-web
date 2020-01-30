import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPokemonComponent } from './pages/lista-pokemon/lista-pokemon.component';
import { CadPokemonComponent } from './pages/cad-pokemon/cad-pokemon.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonComponent,
    CadPokemonComponent,
    EditPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
