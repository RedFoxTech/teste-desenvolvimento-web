import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class DeletarPokemon extends Component {
    constructor(props){
        super(props);

        this.state = {
            pokemon: {},
            redirect: false
        }            
    }

    componentDidMount(){
        // recupera o id do pokemon 
        const {id} = this.props.match.params;

        // busca pelo pokemon no back-end
        fetch(`http://localhost:3003/pokemons/${id}`)
        .then(data => {
            data.json().then(data => {
                this.setState({pokemon: data});
            })
        })

        console.log(this.state.pokemon)
    }

    render(){
        const {redirect} = this.state;

        const estilo = {
            width: '25rem'
        }
        
        let badge = "primary";

        // define a cor de fundo do badge
        
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
        

        if(redirect){
            return (
                <div className="col">
                    <div className="alert alert-success" role="alert">
                        Pokemon deletado com sucesso!
                    </div>
                    <Link to={"/"} className="link">Menu Principal</Link>  
                </div>
            )
        }else{
            return (
                
                <div className="col">
                    {Funcao(this.state.pokemon.type1)}
                    <h4>Deletar Pokemon</h4>
                    <div className="card mb-3" style={estilo}>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.pokemon.name}</h5>
                            <span className={`card-subtitle mb-2 badge bg-${badge}`}>{this.state.pokemon.type1}</span>
                            <p>Tem certeza que deseja deletar este Pokemon?</p>
                            <p><Link to={"/"} className="card-link">Voltar</Link></p>
                            <button className="btn btn-danger" onClick={this.handleClick}>Deletar</button>                 
                        </div>
                    </div>
                </div>
            )
        }
    }

    handleClick = event => {
        const {id} = this.props.match.params;

        // deleta um registro de pokemon do back-end
        fetch(`http://localhost:3003/pokemons/${id}`, {
            method: 'delete'
        })
        // atualiza o estado do redirect
        .then(data => {
            if(data.ok){
                this.setState({redirect: true});
            }
        })
        // retorna erro caso algo tenha dado errado
        .catch(error => {
            return error
        })

        event.preventDefault()
    }
    
}

export default DeletarPokemon;