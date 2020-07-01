import React from 'react'
import {PokeDetailsContainer, PainelHeader, PokemonSprite, PokeTypeHeader, PokeAttributes} from './styles.js'
import PokemonMockImg from '../../img/poke.png'

function PokeDetails() {
    
    return (
    
        <>
            <PainelHeader>
                <h1>Lapras</h1>
            </PainelHeader>

            <PokeDetailsContainer>

                <PokemonSprite>

                    <img src={PokemonMockImg}/>

                </PokemonSprite>

                <div className="PokeInfo">
                    <PokeTypeHeader>

                        <div>
                            <span> Poison </span>
                            <span> Water </span>
                        </div>

                        <div>
                            <h1>#77</h1>
                        </div>       

                    </PokeTypeHeader>

                    <PokeAttributes>
                        <p>"STAT TOTAL": "326",</p>
                        <p>"ATK": "118",</p>
                        <p>"DEF": "118",</p>
                        <p>"STA": "90",</p>
                    </PokeAttributes>

                </div>
            </PokeDetailsContainer>
        </>
    )
}

export default PokeDetails;