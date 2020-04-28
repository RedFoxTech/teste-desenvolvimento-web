import React from 'react';
import Card from 'react-bootstrap/Card';

import './pokeInfo.css';
import Sword from '../../assets/sword.png';
import Shield from '../../assets/shield.png';
import Stamina from '../../assets/stamina.png';
import notFound from '../../assets/404.png';

const pokeInfo = (props) => {
    const pokemon = props.searchResults[0];

    if(!pokemon) {
        return <img src={notFound} alt="Pokemon não encontrado" />;
    }

    if(pokemon) {
        if(props.searchResults.length > 1){
            return null;
        }
    }

    return (
        <Card className="d-flex flex-column align-items-center">
            <Card.Img variant="top" src={"https://pokeres.bastionbot.org/images/pokemon/"+ pokemon["Img name"] + ".png"} className="w-25"/>
            <Card.Body className="w-75">
                <Card.Title className="text-center mb-1">{pokemon.Name}</Card.Title>
                <Card.Subtitle className="text-center mb-3">{pokemon.Generation}a geração</Card.Subtitle>
                <Card.Text className="d-flex justify-content-center">
                    <p className={"type my-0 mx-2 "+pokemon["Type 1"]}>{pokemon["Type 1"]}</p>
                    {pokemon["Type 2"] ? <p className={"type mb-0 mx-2 "+pokemon["Type 2"]}>{pokemon["Type 2"]}</p> : null}
                </Card.Text>
                <hr/>
                <Card.Text className="d-flex justify-content-around">
                    <p className="info mb-0">ATK <img src={Sword} alt="Ataque"/><br/>{pokemon.ATK}</p>
                    <p className="info mb-0">DEF <img src={Shield} alt="Defesa"/><br/>{pokemon.DEF}</p>
                    <p className="info mb-0">STA <img src={Stamina} alt="Stamina"/><br/>{pokemon.STA}</p>
                </Card.Text>
                <Card.Text>
                    <div className="d-flex justify-content-between align-items-center cpHolder mb-2">
                        <div className="cp">CP @ 40</div>
                        <div className="cpValue">{pokemon["100% CP @ 40"]}</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center cpHolder mb-2">
                        <div className="cp">CP @ 39</div>
                        <div className="cpValue">{pokemon["100% CP @ 39"]}</div>
                    </div>
                </Card.Text>
                <hr/>
                <Card.Text className="w-50 m-auto text-center">
                    <p className="question">Evolved? <strong>{pokemon.Evolved ? "Sim!" : "Não!"}</strong></p>
                    <p className="question">Cross Gen? <strong>{pokemon["Cross Gen"] ? "Sim!" : "Não!"}</strong></p>
                    <p className="question">Lengedary? <strong>{pokemon.Legendary ? "Sim!" : "Não!"}</strong></p>
                    <p className="question">Spawns? <strong>{pokemon.Spawns ? "Sim!" : "Não!"}</strong></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default pokeInfo