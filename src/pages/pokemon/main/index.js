import React, {Component} from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import SearchPokemons from '../../../components/search/search';
import Pokemons from './Pokemons';
import Pagination from '../../../components/pagination/Pagination';

import './index.css';

class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            pokemons: [],
            totalPokemons: 0,
            page: 0,
            pageSize: 0
        }
    }

    componentDidMount(){
        this.CarregarPagina(1);
    }

    // busca os dados no back-end
    CarregarPagina = (page) => {
        const params = queryString.parse(this.props.location.search);
        params['page'] = page;
        fetch(`http://localhost:3003/pokemons?${queryString.stringify(params)}`)
        .then(data => 
            data.json().then(data => this.setState(data))
        )
    }
    
    render(){
        // acessa o estado e busca pelo pokemon já com os dados
        const {pokemons, totalPokemons, page, pageSize} = this.state;

        const url = `/pokemons${this.props.location.search}`;

        return (
            <div>
                <SearchPokemons />
                <Pokemons pokemons={pokemons}/>
                <Pagination 
                    pokemonsPorPagina={pageSize} 
                    totalDePokemons={totalPokemons} 
                    CarregarPagina={this.CarregarPagina}
                    paginaAtual={page}
                />
            </div>
        )
    }
}

export default Main;