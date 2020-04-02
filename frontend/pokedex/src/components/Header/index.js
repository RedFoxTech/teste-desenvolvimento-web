import React,{Component} from "react"
import { Header, Icon, Button } from 'rsuite'
import PokedexLogo from "../../resources/pokedex.png"
import { connect } from "react-redux"
import { getPokemonByNameOrNumber, getPokemons, getQuantityOfPages } from "../../actions/index"

const headerStyle = {
    display: "flex",
    backgroundColor: "#2A2D34",
    color: "#0086FF",
    fontFamily: "'Oxanium', 'cursive'",
    padding: "25px 150px"
}

const logo = {
    width: "100px"
}

const title = {
    alignSelf: "center"
}

const input = {
    width: "350px",
    alignSelf: "center",
    border: "1px solid #e5e5ea",
    transition: "border-color .3s ease-in-out",
    borderRadius: "6px",
    padding: "7px 11px",
    fontSize: "14px"
}

const inputArea = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    margin: "25px 0 0 50px"
}

const buttonSearch = {
    alignSelf: "center",
    margin: "5px 0 0 15px"
}

const buttonReset = {
    alignSelf: "center",
    margin: "5px 0 0 15px"
}

class HeaderHome extends Component{

    constructor(props){
        super(props)
        this.state = {
            inputSearch: "",
            buttonResetDisabled: true
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getPokemonByNameOrNumber = () => {
        this.props.getPokemonByNameOrNumber(this.state.inputSearch)
        this.setState({
            buttonResetDisabled: false,
            inputSearch: ""
        })
    }

    resetListOfPokemons = () => {
        const page = 1
        this.props.getPokemons(page)
        this.props.getQuantityOfPages()
        this.setState({
            buttonResetDisabled: true
        })
    }

    render(){
    return(
        <>
            <Header style={headerStyle}>
                <img alt="pokemon" src={PokedexLogo} style={logo}/>
                <h1 style={title}>Pokédex</h1>
                <div style={inputArea}>
                        <input
                            type="text"
                            style={input} 
                            onChange={this.handleInputChange}
                            placeholder="Pesquisar" 
                            name="inputSearch" 
                            value={this.state.inputSearch} 
                        />
                    <p> Pesquise pelo nome ou número do Pokémon </p>
                </div>
                <Button style={buttonSearch} onClick={this.getPokemonByNameOrNumber}>
                    <Icon icon="search"/>
                </Button>
                <Button style={buttonReset} color="red" disabled={this.state.buttonResetDisabled} onClick={this.resetListOfPokemons}>
                    Resetar
                </Button>

            </Header>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPokemonByNameOrNumber: (nameOrNumber) => dispatch(getPokemonByNameOrNumber(nameOrNumber)),
    getPokemons: (page) => dispatch(getPokemons(page)),
    getQuantityOfPages: () => dispatch(getQuantityOfPages())
})

export default connect(null, mapDispatchToProps)(HeaderHome)