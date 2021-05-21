import { Pokemon } from '../../../model/pokemon.model'
import { PokemonService } from 'src/app/service/pokemon.service';

import {AfterViewInit, Component, ViewChild, TemplateRef, Inject, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  dataPokemon: any
  

  pokemon!: Pokemon[]
  displayedColumns: string[] = ['row', 'name', 'type_1', 'detail'];
  dataSource!: MatTableDataSource<Pokemon>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.pokemon);
    
  }

  openModal(template: TemplateRef<any>, text: Pokemon) {
    this.dataPokemon = this.dialog.open(template);
    this.dataPokemon.componentInstance = text
  }

  
  ngAfterViewInit() {

    this.pokemonService.read().subscribe(p => {
      this.pokemon = p

      this.dataSource = new MatTableDataSource(this.pokemon)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      //console.log(this.pokemon)
    })

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

    if (this.dataSource.paginator) {
      //this.dataSource.paginator.firstPage();
      this.dataSource.paginator.firstPage();
    }
  }
}