import React from 'react';
import './pokemon.scss';

export default function Item({ data }) {

    return (
        <div className={`Item-main ${data.type1}`}>
            <div className="row Item-box">
                <div className="col-6 col-sm-2">
                    <div className="Item-type">
                        <img width="30px" src={`/assets/img/types/${data.type1}.svg`} />
                    </div>
                </div>
                <div className="col-6 col-sm-3">
                    <div className="Item-pokedex">
                        <img width="50px" src="/assets/img/pokedex.png" />
                        <div>
                            Nº { data.code }
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4">
                    <div className="Item-pokemon">
                        <img width="70px" src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${data.name.toLowerCase()}.png`} />
                        <div>
                            { data.name }
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-3">
                    <div className="Item-weater">
                        { data.weather1 }
                    </div>
                </div>
            </div>
        </div>
    )
}