import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class ShowPokemon extends Component {
    // cria o estado e define o objeto pokemon
    state = {
        pokemon: {}
    }

    componentDidMount(){
        // recupera o id do pokemon
        const {id} = this.props.match.params;

        // busca os dados no back-end
        fetch(`http://localhost:3003/pokemons/${id}`)
        .then(pokemon =>
            pokemon.json().then(pokemon => this.setState({pokemon}))
            )
    }

    render(){
        // acessa o estado e busca pelo pokemon já com os dados
        const {pokemon} = this.state;
        const estilo = {
            width: '15rem'
        }
        let badge = "primary";
        
        // define a cor de fundo do badge
        switch(pokemon.type1){
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
        return (
            <div className="col">
                <div className="card" style={estilo}>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <span className={`card-subtitle mb-2 badge bg-${badge}`}>{pokemon.type1}</span>
                    <p className="card-text">Atk: {pokemon.atk}</p>
                    <p className="card-text">Def: {pokemon.def}</p>
                    <p className="card-text">Sta: {pokemon.sta}</p>
                    <p className="card-text">TOTAL: {pokemon.statTotal}</p>
                    <Link to={"/"} className="card-link">Voltar</Link>
                    <Link to={`/editarPokemon/${pokemon.id}`} className="card-link">Editar</Link>
                    <Link to={`/deletarPokemon/${pokemon.id}`} className="card-link">Deletar</Link>
                </div>
            </div>
            </div>
            
        )
    }
}

export default ShowPokemon;