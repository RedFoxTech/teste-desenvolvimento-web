import React from 'react';

import { calculateStatusPercentage } from '../../utils/calculateStatusPercentage';

import PokemonData from '../../dtos/PokemonData';
import { getColorHexFromType } from '../../utils/types';

interface PokemonCardDetailProps {
    pokemon: PokemonData
    show: boolean;
    close(): void;
}

const PokemonCardDetail: React.FC<PokemonCardDetailProps> = ({ pokemon, show, close }) => {
    return (
        <dialog open={show} id="myModal" className="h-auto md:w-1/2 md:p-4 flex justify-center fixed bg-white rounded-md shadow-2xl container">
        
            <button onClick={() => close()} className="flex items-center justify-center w-1/12 h-10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x cursor-pointer"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="pokemon-card-detail">
                <img
                    className="h-1/4 md:h-1/3 sm:max-w-sm"
                    src={pokemon.sprite_url}
                    alt="Pokemon"
                />

                <span className="md:mt-4 text-xl font-semibold">
                    {pokemon.name}
                </span>

                <section className="types-section">
                    {pokemon.type_1 && (
                        <div className="type-box" style={{ borderColor: getColorHexFromType(pokemon.type_1)}}>
                            <label style={{ color: getColorHexFromType(pokemon.type_1)}}>
                                {pokemon.type_1}
                            </label>
                        </div>
                    )}

                    {pokemon.type_2 && (
                        <div className="type-box"  style={{ borderColor: getColorHexFromType(pokemon.type_2)}}>
                            <label style={{ color: getColorHexFromType(pokemon.type_2)}}>
                                {pokemon.type_2}
                            </label>
                        </div>
                    )}
                    
                </section>

                <section className="status-section">
                    <div className="stat-total-container">
                        <label className="font-semibold text-base">
                            Stat Total
                        </label>

                        <span className="text-lg">
                            {pokemon.stat_total}
                        </span>
                    </div>

                    <div className="resum-box">
                        <div className="resum-item">
                            <div>
                                <label className="text-red-400 text-xl font-semibold pr-3">
                                    Atk
                                </label>
                                
                                <span className="font-bold text-lg">
                                    {pokemon.atk}
                                </span>
                            </div>

                            <div className="progress-bar">
                                <span>
                                    {`${calculateStatusPercentage(pokemon.atk)}%`}
                                </span>
                                <div className="relative">
                                    <div className="overflow-hidden h-2 w-full text-xs flex rounded bg-red-200">
                                        <div style={{ width: `${calculateStatusPercentage(pokemon.atk)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="resum-item">
                            <div>
                                <label className="text-yellow-300 text-xl font-semibold pr-3">
                                    Def
                                </label>
                                
                                <span className="font-bold text-lg">
                                    {pokemon.def}
                                </span>
                            </div>
                        
                            <div className="progress-bar">
                                <span>
                                    {`${calculateStatusPercentage(pokemon.def)}%`}
                                </span>

                                <div className="relative">
                                    <div className="overflow-hidden h-2 w-full text-xs flex rounded bg-yellow-200">
                                        <div style={{ width: `${calculateStatusPercentage(pokemon.def)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="resum-item">
                            <div>
                                <label className="text-blue-500 text-xl font-semibold pr-3">
                                    Sta
                                </label>
                                
                                <span className="font-bold text-lg">
                                    {pokemon.sta}
                                </span>
                            </div>
                            
                            <div className="progress-bar">
                                <span>
                                    {`${calculateStatusPercentage(pokemon.sta)}%`}
                                </span>
                                <div className="relative">
                                    <div className="overflow-hidden h-2 w-full text-xs flex rounded bg-blue-200">
                                        <div style={{ width: `${calculateStatusPercentage(pokemon.sta)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </dialog>

    );
};

export default PokemonCardDetail;