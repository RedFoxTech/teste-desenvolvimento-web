import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditarPokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: {
                name: "",
                atk: 0,
                def: 0,
                sta: 0,
                tipo1: ""
            },
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

        const tamanhoDoInput = {
            width: '100px'
        }

        const espaco = {
            marginRight: '10px'
        }
        // buscando o redirect no state
        const {redirect} = this.state;

        // verifica se o redirect já foi feito
        if(redirect){
            return (
                <div className="col">
                    <div className="alert alert-success" role="alert">
                        Você atualizou um novo Pokemon!
                    </div>
                    <Link to={"/"} className="link">Menu Principal</Link>
                    
                </div>
            )
        }else{
            return(
                <form onSubmit = {this.handleSubmit}>
                    <div className="row">
                        <h4>Atualizar Pokemon</h4>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={this.state.pokemon.name} onChange={this.handleInputChange}/>
                                
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="atk" className="form-label">Atk</label>
                                    <input type="number" className="form-control" id="atk" name="atk" value={this.state.pokemon.atk} onChange={this.handleInputChange} style={tamanhoDoInput}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label" htmlFor="def">Def</label>
                                    <input type="number" className="form-control" id="def" name="def" value={this.state.pokemon.def} onChange={this.handleInputChange} style={tamanhoDoInput}/>
                                </div>
                                <div className="col-md-4 mb-3 ">
                                    <label className="form-label" htmlFor="sta">Sta</label>
                                    <input type="number" className="form-control" id="sta" name="sta" value={this.state.pokemon.sta} onChange={this.handleInputChange} style={tamanhoDoInput}/>
                                </div>
                                <div className="col-md-4 mb-3 ">
                                    <label className="form-label" htmlFor="sta">Type</label>
                                    <input type="text" className="form-control" id="type1" name="type1" value={this.state.pokemon.type1} onChange={this.handleInputChange} style={tamanhoDoInput}/>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-success" style={espaco} >Atualizar</button>
                            <Link to="/" className="btn btn-warning">Voltar</Link>
                        </div>
                    </div>               
                </form>
                    
            )   
        }
    }

    // localiza o evento que esta sendo alterado
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        // atualiza o estado do elemento que está sendo alterado
        this.setState(prevState => ({
            pokemon: {...prevState.pokemon, [name]: value}
        }))
    }

    // envia os dados para o back-end
    handleSubmit = event => {

        const {id} = this.state.pokemon;

        // atualiza o pokemon no back-end
        fetch(`http://localhost:3003/pokemons/${id}`, {
            method: 'put',
            body: JSON.stringify(this.state.pokemon),
            headers: {
                'Content-Type': 'application/json'
            }
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

export default EditarPokemon;