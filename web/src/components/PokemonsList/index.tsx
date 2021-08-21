import React, { useState } from 'react';

import PokemonCard from '../PokemonCard';
import PokemonCardDetail from '../PokemonCardDetail';

import PokemonData from '../../dtos/PokemonData';

interface PokemonsListProps {
    pokemons: PokemonData[];
}

const PokemonsList: React.FC<PokemonsListProps> = ({ pokemons }) => {
    const [showPokemonDetail, setShowPokemonDetail] = useState(false)
    const [pokemonSelectData, setPokemonSelectedData] = useState<PokemonData>({} as PokemonData);

    const handleClickPokemonCard = (selectedPokemon: PokemonData ) => {
        setShowPokemonDetail(true);

        setPokemonSelectedData(selectedPokemon)
    }

    return (
        <section className="pokemons-sections">
            <section className="pokemons-grid">
                {pokemons && pokemons.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.id}
                        pokemonData={pokemon}
                        onClick={() => handleClickPokemonCard(pokemon)}
                    />
                ))}
                
            </section>
            
            {showPokemonDetail && (
                <PokemonCardDetail 
                    pokemon={pokemonSelectData}
                    show={showPokemonDetail}
                    close={() => setShowPokemonDetail(false)}
                />
            )}
            
        </section>
    );
};

export default PokemonsList;