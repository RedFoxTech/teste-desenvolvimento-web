import React from 'react';

import PokemonData from '../../dtos/PokemonData';

interface PokemonCardProps {
    onClick(): void;
    pokemonData: PokemonData;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ 
    onClick,
    pokemonData
}) => {
    const handleClickOnPokemonCard = () => {
        onClick();
    }

    return (
        <div className="pokemon-card"
            onClick={() => handleClickOnPokemonCard()}
        >
            <img
                className="h-32 md:h-32 xl:h-40 m-auto"
                src={pokemonData.sprite_url} 
                alt="Pokemon"
            />

            <label className="text-center block md:mt-2 font-semibold">
                {pokemonData.name}
            </label>
        </div>
    );
};

export default PokemonCard;