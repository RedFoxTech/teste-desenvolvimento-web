import React from "react";
import { connect } from 'react-redux'
import { push } from 'connected-react-router';

import { routes } from '../../Router'

import ButtonAppBar from "../../components/AppBar";


import { PageWrapper, Button, ContainerNav, PokeballImage, ContainerSlide, PokemonImage, Slide } from "./style";

import pokebola from "../../image/pokebola-icon.png";
import pikachu from "../../image/pikachu-icon.png";
import pikachuHome from "../../image/pikachu-home.png";
import bulbassauro from "../../image/bulbasaur-home.png";
import charmander from "../../image/charmander-home.png";
import meowth from "../../image/meowth-home.png";
import squirtle from "../../image/squirtle-home.png";




class Home extends React.Component {
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

    render() {
        const { searchInputValue } = this.state;

        return (
            <PageWrapper>
                <ButtonAppBar
                    pageName="Pokemon Go"
                    searchValue={searchInputValue}
                    onChangeSearchInputValue={this.handleSearchInputValue}
                />
                <ContainerNav>
                    <Button onClick={this.props.goToRegisterPage}>
                        <PokeballImage src={pokebola} alt="Pokeball Icon" />
                         Adicionar novo Pokemon
                         </Button>
                    <Button onClick={this.props.goToPokemonsList}>
                        <PokeballImage src={pikachu} alt="Pokeball Icon" />
                        Lista de Todos os Pokemons
                        </Button>
                    <Button onClick={this.props.goToUpdatePage}>
                        <PokeballImage src={pokebola} alt="Pokeball Icon" />
                        Atualizações
                        </Button>
                    <ContainerSlide>
                        <Slide>
                            <li>
                                <PokemonImage src={pikachuHome} alt="Pikachu" />
                            </li>
                            <li>
                                <PokemonImage src={bulbassauro} alt="Bulbassauro" />
                            </li>
                            <li>
                                <PokemonImage src={charmander} alt="Charmander" />
                            </li>
                            <li>
                                <PokemonImage src={squirtle} alt="Squirtle" />
                            </li>
                            <li>
                                <PokemonImage src={meowth} alt="Meowth" />
                            </li>
                        </Slide>
                    </ContainerSlide>
                </ContainerNav>
            </PageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToRegisterPage: () => dispatch(push(routes.register)),
        goToUpdatePage: () => dispatch(push(routes.update)),
        goToPokemonsList: () => dispatch(push(routes.list))
    }
}

export default connect(null, mapDispatchToProps)(Home); 