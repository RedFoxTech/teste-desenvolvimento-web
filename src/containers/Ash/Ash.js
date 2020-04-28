import React, {useState} from 'react';
import ash from '../../assets/ash.png';
import {Transition} from 'react-transition-group';

import './Ash.css';

const Ash = (props) => {

    const [toContinue, setContinue] = useState(0);
    const falas = [
        `Oi, eu sou o Ash da cidade de Pallet. Essa é a nossa aventura pelo mundo dos Pokémons.`,
        "Aqui temos duas opções: Pokémon gotta catch 'em all e a Pokedex.",
        "Pokémon gotta catch 'em all mostra todos os pokémons e permite que você filtre e altere os dados.",
        "A Pokedex serve para você procurar um pokémon específico e ver seus atributos.",
        "Escolha a sua opção e divirta-se!"
    ]

    let speach = "";
    let button = null;
    if(toContinue < falas.length) {
        speach = falas[toContinue]
    }
    if(toContinue < falas.length - 1) {
        button = <button className="continue" onClick={() => setContinue(toContinue + 1)}>CONTINUE</button>
    }

    const styles = {
        entering: {transform: 'translateX(-1000px)'},
        entered: {transform: 'translateX(20px)'},
    };

    return (
        <Transition
            in={true}
            timeout={600}
            appear
        >
            {(state) => 
                (
                    <div 
                        className="ash d-flex align-items-end row" 
                        style={{...styles[state]}}
                    >
                        <img src={ash} alt="Ash"/>
                        <div className="align-self-center col-7 col-md-4 pl-2">
                            <div className="chat">
                                <p className="p-2 m-0">{speach}</p>
                            </div>
                        {button}
                        </div>
                    </div> 
                )
            }
        </Transition>





    );
}

export default Ash;