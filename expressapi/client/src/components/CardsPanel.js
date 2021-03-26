import React, { useState, useEffect, Fragment } from 'react';
import Card from './Card'

const CardsPanel = ({ pokemons, submisionStatus }) =>
{
    return (
        <Fragment>
            <div className="row">
                {submisionStatus ?
                    (
                        pokemons.map((pokemon) =>
                        {
                            return (<Card key={pokemon.pokedexnumber}
                                pokemon={pokemon}
                            />)
                        })
                    ) : (<div> </div>)
                }
            </div>
        </Fragment>
    );

}

export default CardsPanel;
