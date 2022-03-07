import React, { Component } from 'react';

import PokemonCard from './PokemonCard';


export default class PokemonList extends Component {


    render() {
        return (
            <div>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        );
    }
}