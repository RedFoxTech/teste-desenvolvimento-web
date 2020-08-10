import React from "react";
import ButtonAppBar from "../../components/AppBar";

import { PageWrapper, Button, ContainerNav, PokeballImage } from "./style"

import pokebola from "../../image/pokebola-icon.png";
import pikachu from "../../image/pikachu-icon.png";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInputValue: ''
        }
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
                    <Button><PokeballImage src={pokebola} alt= "Pokeball Icon"/> Adicionar novo Pokemon</Button>
                    <Button><PokeballImage src={pikachu} alt= "Pokeball Icon"/> Lista de Todos os Pokemons</Button>
                    <Button><PokeballImage src={pokebola} alt= "Pokeball Icon"/> Atualizações</Button>
                </ContainerNav>
            </PageWrapper>
        )
    }
}

export default Home; 