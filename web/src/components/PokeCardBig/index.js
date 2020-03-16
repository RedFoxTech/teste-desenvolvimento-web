import React from 'react';

import PokeButtons from '../PokeButtons/index';
import './style.css';

function PokeCardBig() {
    return (
        <div className="container">
            <div className="row card-big">
                <div className="col-2 content-card">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" className="card-img" alt="imagem-teste" />
                    <PokeButtons />
                </div>
                <div className="col-2 content-card">
                    <p><span><strong>Name:</strong>#6</span></p>
                    <p><span><strong>Row:</strong>#6</span></p>
                    <p><span><strong>Pokedex Number:</strong>#6</span></p>
                    <p><span><strong>Img Name:</strong>#6</span></p>
                    <p><span><strong>Generation:</strong>#6</span></p>
                    <p><span><strong>Evolution Stage:</strong>#6</span></p>
                </div>
                <div className="col-2 content-card">
                    <p><span><strong>Evolved:</strong>#6</span></p>
                    <p><span><strong>Family Id:</strong>#6</span></p>
                    <p><span><strong>Cross Gen:</strong>#6</span></p>
                    <p><span><strong>Type 1:</strong>#6</span></p>
                    <p><span><strong>Type 2:</strong>#6</span></p>
                    <p><span><strong>Weather 2:</strong>#6</span></p>
                </div>
                <div className="col-2 content-card">
                    <p><span><strong>Stat Total:</strong>#6</span></p>
                    <p><span><strong>Atk:</strong>#6</span></p>
                    <p><span><strong>Def:</strong>#6</span></p>
                    <p><span><strong>Sta:</strong>#6</span></p>
                    <p><span><strong>Legendary:</strong>#6</span></p>
                    <p><span><strong>Aquireable:</strong>#6</span></p>
                </div>
                <div className="col-2 content-card">
                    <p><span><strong>Spawns:</strong>#6</span></p>
                    <p><span><strong>Regional:</strong>#6</span></p>
                    <p><span><strong>Raidable:</strong>#6</span></p>
                    <p><span><strong>Hatchable:</strong>#6</span></p>
                    <p><span><strong>Shiny:</strong>#6</span></p>
                    <p><span><strong>Nest:</strong>#6</span></p>
                </div>
                <div className="col-2 content-card">
                    <p><span><strong>Rew:</strong>#6</span></p>
                    <p><span><strong>Not Gettable:</strong>#6</span></p>
                    <p><span><strong>Future Evolve:</strong>#6</span></p>
                    <p><span><strong>100% CP @ 40:</strong>#6</span></p>
                    <p><span><strong>100% CP @ 39:</strong>#6</span></p>                    
                </div>
            </div>
        </div>
    )
}

export default PokeCardBig;