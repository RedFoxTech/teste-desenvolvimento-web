import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchPokemons from '../../../components/search/search';

import './index.css';

class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            pokemons: []
        }
    }

    // busca os dados no back-end
    componentDidMount(){
        
        fetch(`http://localhost:3003/pokemons${this.props.location.search}`)
        .then(pokemon => 
            pokemon.json().then(pokemons => this.setState({pokemons}))
            )

    }

    
    render(){
        // acessa o estado e busca pelo pokemon já com os dados
        const {pokemons} = this.state;
        const estilo = {
            width: '12rem'
        }
        
        let badge = "primary";

        // define a cor de fundo do badge
        function Funcao(tipo) {
            switch(tipo){
                case 'fire':
                    badge = "orange";
                    break;
                case 'water':
                    badge = "info";
                    break;
                case 'grass':
                    badge = "light-green";
                    break;
                case 'rock':
                    badge = "secondary";
                    break;
                case 'electric':
                    badge = "warning";
                    break;
                case 'fighting':
                    badge = "dark"
                    break;
                case 'bug':
                    badge = "success";
                    break;
                case 'poison':
                    badge = "purple";
                    break;
                case 'ground':
                    badge = "brown"
                    break;
                
                default: 
                    badge = "light text-dark";
            }
        }

        return (
            <div>
                <SearchPokemons />
                <div className="row justify-content-cente mt-3">
                {pokemons.map((pokemon, index) => {
            {Funcao(pokemon.type1)}
            return <div className="col">
                <div className="card mb-3" style={estilo}>
                <div key={index} className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <span className={`card-subtitle mb-2 badge bg-${badge}`}>{pokemon.type1}</span>
                    <p><Link to={`/pokemons/${pokemon.id}`} className="card-link">Detalhes</Link></p>                 
                </div>
            </div>
            </div>
            
        })}</div>
            </div>
        )
    }
}

export default Main;