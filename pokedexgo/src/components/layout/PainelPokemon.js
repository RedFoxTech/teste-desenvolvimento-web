import React, { Component } from 'react';
import ListaPokemon from '../pokemon/ListaPokemon';

export default class PainelPokemon extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <ListaPokemon />
        </div>
      </div>
    );
  }
}
