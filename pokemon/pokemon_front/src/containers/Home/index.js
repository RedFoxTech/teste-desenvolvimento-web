import React, { Component } from "react";
import { routes } from "../Router"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import logo from "../../resources/pokemon_go.png"
import pikachu from "../../resources/pikachu.png"
import { getPokemons } from "../../actions/pokemonList";
import { deletePokemon, setPokemonId, } from "../../actions/pokemons";
import Loading from "../../components/Loading"
import { PokemonCardContainer, PageCount, StyledHeader, StyledLogo, LogoContainer, StyledImgSearch, SearchContainer, ButtonMenu, StyledButton, StyledInput, ButtonPass } from "./styled"
import PokemonCard from "../../components/PokemonCard";
import pokemons from "../../reducers/pokemons";
import Search from "../Search";



export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            search: ""
        }
    }


    componentDidMount() {
        this.props.getPokemons(this.state.page)
        const pokemonid = this.props.getPokemons(pokemons.id)
    };

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({ search: event.target.value })
    };

    handleNextPage = () => {
        let { page } = this.state
        this.setState({
            page: page + 1
        })
        this.props.getPokemons(page + 1)
    }

    handlePreviousPage = () => {
        let { page } = this.state
        if (page > 1) {
            this.setState({
                page: page - 1
            })
        }

        this.props.getPokemons(page - 1)
    }

    handleDeletePokemon = (id, name) => {
        this.props.deletePokemon(id, name)
    }

    render() {

        const { search } = this.state
        const { pokemonList } = this.props



        const pokemonIsReady = this.props.pokemonList.lenght === 0 ? <Loading /> : (

            <>
                {pokemonList.map((pokemons) =>
                    <PokemonCard
                        pokedexID={pokemons.pokedexID}
                        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.pokedexID}.png`}
                        name={pokemons.name}
                        type1={pokemons.type1}
                        type2={pokemons.type2}
                        button1={"x"} onClick1={() => this.handleDeletePokemon(pokemons.id, pokemons.name)}
                    />

                )}

            </>
        )




        return (
            <>
                <StyledHeader>
                    <LogoContainer>
                        <StyledLogo src={logo} />
                    </LogoContainer>
                    <SearchContainer>
                       <StyledButton onClick={this.props.goToSearch} >Search</StyledButton> <StyledImgSearch src={pikachu}></StyledImgSearch>
                    </SearchContainer>
                    <ButtonMenu>
                        <StyledButton onClick={this.props.goToRegister}>Register Pokemon</StyledButton>
                    </ButtonMenu>
                </StyledHeader>
                <PokemonCardContainer>
                    {pokemonIsReady}
                </PokemonCardContainer>
                <ButtonPass>
                    <div>
                        <StyledButton onClick={this.handlePreviousPage}>Previous</StyledButton><PageCount>{this.state.page}</PageCount><StyledButton onClick={this.handleNextPage} > Next </StyledButton>
                    </div>
                </ButtonPass>
            </>
        );
    }
}

const mapStateToProps = state => ({
    pokemonList: state.pokemons.allPokemons

})


const mapDispatchToProps = (dispatch) => ({
    getPokemons: (page) => dispatch(getPokemons(page)),
    goToRegister: () => dispatch(push(routes.Register)),
    goToSearch: () => dispatch(push(routes.Search)),
    deletePokemon: (id, name) => dispatch(deletePokemon(id, name))
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
