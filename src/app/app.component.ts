import { Component, OnInit, ViewChild } from '@angular/core';
// Components
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
// Models
import { Pokemon } from '../models/Pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Poketeste';
  @ViewChild(AddDialogComponent) addDialog;
  DB: IDBDatabase;
  IDBName = 'PokeDB';
  IDBVersion = 1;
  selectedPokemon: Pokemon = new Pokemon('',null,null,null);
  pokeList: Pokemon[];
  viewList: Pokemon[];
  dataList: any[];
  ngOnInit() {
    // Create Datalist
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=964')
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((data) => {
          this.dataList = this.sortBy('name', data.results);
        })
      }
    })
    if (!window.indexedDB) {
      console.warn("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }

    const request = indexedDB.open(this.IDBName, this.IDBVersion);

    request.addEventListener('success', () => {
      this.DB = request.result;
      this.getData();
    });

    request.addEventListener('error', (evt) => {
      console.error(evt);
    });

    request.addEventListener('upgradeneeded', () => {
      this.DB = request.result;
      // Create an objectStore for this database
      const objectStore: IDBObjectStore = this.DB.createObjectStore("pokeList",
        {
          keyPath: "id",
          autoIncrement: true
        });
      // Create index to search Pokemon by name
      objectStore.createIndex("name", "name", { unique: true });
      // Add mock data
      const mockData: Pokemon[] = [
        new Pokemon(
          'Bulbasaur',
          118,
          118,
          90
        ),
      ];

      let pokemonStore: IDBObjectStore = null;
      objectStore.transaction.addEventListener('complete', () => {
        pokemonStore = this.DB.transaction("pokeList", "readwrite").objectStore("pokeList");
        
        mockData.forEach((pokemon) => {
          pokemonStore.add(pokemon);
        });
      });
    })
  }
  /**
   * Get all data and update
   */
  getData() {
    const pokeStore = this.DB.transaction("pokeList").objectStore('pokeList');
    const getRequest = pokeStore.getAll();

    getRequest.addEventListener('success', () => {
      this.pokeList = getRequest.result
      this.viewList = this.pokeList
    });
  }
  /**
   * Open edit modal with selected pokemon
   * @param pokemon selected pokemon
   */
  onSelect(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.addDialog.openModal();
  }
  /**
   * Open edit modal with fresh pokemon
   */
  onAddNew() {
    this.selectedPokemon = new Pokemon('', null, null, null);
    this.addDialog.openModal();
  }
  /**
   * Save record to IndexedDB
   * @param data record to save
   */
  onSave(data: any) {
    this.addDialog.closeModal();
    
    if (!data.id) {
      delete data.id;
    }

    // SaveData
    const pokeStore = this.DB.transaction("pokeList", 'readwrite').objectStore('pokeList');
    const putRequest = pokeStore.put(data);
    
    putRequest.addEventListener('success', () => {
      console.log('data Saved', putRequest.result);
    });

    // Refresh data
    this.getData();

  }
  /**
   * Delete a pokemon from IndexedDB
   * @param evt
   * @param pokemonId pokemon id to delete
   */
  onDelete(evt: MouseEvent, pokemonId: number) {
    evt.stopPropagation();
    console.log('onDelete', pokemonId);
  }
  /**
   * Sort pokemon list by a key
   * @param keySort Key to sort
   */
  onSort(keySort: string) {
    this.viewList = this.sortBy(keySort, this.pokeList);
  }
  /**
   * Get pokemon´s sprite
   * @param pokemonName sprite´s pokemon name
   */
  getThumb(pokemonName: string) {
    return `https://img.pokemondb.net/sprites/go/normal/${pokemonName.toLowerCase()}.png`;
  }
  /**
   * Utility function to sort a array of objects by a key
   * @param keySort key to sort by
   * @param list list to sort
   */
  sortBy(keySort: string, list: any[]) {
    const tmpList = list;
  
    tmpList.sort((elA, elB) => {
      const valA = elA[keySort];
      const valB = elB[keySort];
  
      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
  
      // names must be equal
      return 0;
    });
  
    return tmpList;
  }
}
