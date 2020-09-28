import React, { Component } from 'react';

export default class PokemonCard extends Component {
  render() {
    return (
      <div className="col-md-3 col-md-6 mb-5" >
        <div className="card">
          <div className="card-header">
            <h1>Pokemons</h1>
          </div>
        </div>
      </div>
    );
  }
}
