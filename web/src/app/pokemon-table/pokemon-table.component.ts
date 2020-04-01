import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, DefaultResponse } from '../pokemon';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { InsertModalComponent } from '../insert-modal/insert-modal.component';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {

  searchType = [
    'row',
    'name',
    'pokedex_number',
    'img_name',
    'generation',
    'evolution_stage',
    'evolved',
    'family_id',
    'cross_gen',
    'type_1',
    'type_2',
    'weather_1',
    'weather_2',
    'stat_total',
    'atk',
    'def',
    'sta',
    'legendary',
    'aquireable',
    'spawns',
    'regional',
    'raidable',
    'hatchable',
    'shiny',
    'nest',
    'new',
    'not_gettable',
    'future_evolve',
    'hundred_cp_40',
    'hundred_cp_39'
  ]
  searchSelect: any
  searchValue: any
  model: any
  pokemons: Pokemon[]
  defaultResponse$: Observable<DefaultResponse>
  page = 1;
  pageSize = 10;
  collectionSize;

  constructor(
    private api: ApiService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }
  
  
  openEditModal(pokemon) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '70vh',
      height: '80%',
      disableClose: true,
      data: pokemon
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data !== undefined && data.delete) {
        this.deletePokemon(data)
        return
      }
      if (data !== undefined){
        this.updatePokemon(data)
      }
    });   
  }
  
  opemInsertModal() {
    const dialogRef = this.dialog.open(InsertModalComponent, {
      width: '70vh',
      height: '80%',
      disableClose: true,
      data: this.searchType
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data !== undefined){
        this.insertPokemon(data)
      }
    });   
  }
  

  ngOnInit(): void {
    this.reloadContent()
  }

  reloadContent() {
    this.defaultResponse$ = this.api.getAllPokemons(this.page, this.pageSize)

    this.defaultResponse$.subscribe(data => {
      this.reloadVariables(data)
    })
  }

  reloadVariables(data) {
    this.pokemons = data.results
    this.collectionSize = data.count
    
  }

  onSearchTypeChange(type) {
    this.searchSelect = type
  }

  onSearchValueChange(value) {
    this.searchValue = value
  }

  search() {
    if (this.searchSelect == 'name') {
      let find = {} 
      find[this.searchSelect] = this.titleCase(this.searchValue)
      
      this.defaultResponse$ = this.api.getPokemonByName({"query": find })

      this.defaultResponse$.subscribe(data => {
        this.updateVariablesValues(data)
      })

      return
    }
    
    let find = {} 
    find[this.searchSelect] = this.searchValue
    this.defaultResponse$ = this.api.getPokemonByQuery({"query": find })

    this.defaultResponse$.subscribe(data => this.updateVariablesValues(data),
                                    err => this.openSnackBar('Something went wrong.','Try something different'))
  }


  deletePokemon(data) {
    let query = { '_id': data._id }
    
    this.api.deletePokemon(query).subscribe(res => this.openSnackBar('The Pokémon was successfully deleted from your Pokédex.', ':)'),
        	                                  err => this.openSnackBar('Something went wrong.','Try something different'))
    this.reloadContent()
  }

  insertPokemon(data) {
    let query;
    let pokemons = [data]
    query = { pokemons: pokemons }

    this.api.insertPokemon(query).subscribe(res => this.openSnackBar('The Pokémon was successfully saved on your Pokédex.', ':)'),
        	                                  err => this.openSnackBar('Something went wrong.','Try something different'))
    this.reloadContent()
  }

  updatePokemon(data) {
    let query = {}
    let set = {}
    data.forEach(e => {
      if (e.attribute === '_id') {
        query['find_query'] = {"_id": e.currentValue} 
      } else {
        set[e.attribute] = e.newValue
      }
    });
    query['set_query'] = set
    

    this.api.updatePokemonByQuery(query).subscribe(res =>  this.openSnackBar('Pokémon was successfully updated.', ':)'),
                                                    err => this.openSnackBar('Something went wrong.','Try something different'))
    this.reloadContent()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  updateVariablesValues(data) {
    if (data.count === 0) {
      this.reloadVariables(data)
      this.openSnackBar('0 Pokémons found.', 'Try another search.')
      return
    }

    this.reloadVariables(data)
    this.openSnackBar(data.count + ' Pokémons found.', 'Nice one!')
  }
}
