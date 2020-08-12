import React from "react";
import { connect } from 'react-redux'
import { push } from 'connected-react-router';

import { routes } from '../../Router'

import ButtonAppBar from "../../components/AppBar";


import { PageWrapper, Title } from "./style";



class PokemonListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInputValue: ''
        }
    }

    componentDidMount() {
        localStorage.removeItem('token')
    }

    handleSearchInputValue = (e) => {
        this.setState({
            searchInputValue: e.target.value
        })
    }

    handleGetAllPokemons = (pokemonsId) =>{
        this.props.setPokemonsId(pokemonsId)
        this.props.goToHomePage()
    }
    render() {
        const { searchInputValue } = this.state;

        return (
            <PageWrapper>
                <ButtonAppBar
                    pageName="Pokemon Go"
                    searchValue={searchInputValue}
                    onChangeSearchInputValue={this.handleSearchInputValue}
                />
               <div> 
                    <Title> Lista de Pokemons</Title>
               </div>
            </PageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToHomePage: () => dispatch(push(routes.home))
    }
}

export default connect(null, mapDispatchToProps)(PokemonListPage); 