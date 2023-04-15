import React from 'react';
import './dashboard.css';
import { Datatable } from '../../components/Table';

export default function PokemonList() {

  return (
    <div className='pokedex-page-container'>
      <p className='pokedex-title'>Pokemon List</p>
      <div className="pokedex-table-container">
        <Datatable />
      </div>
    </div>
  )
}
