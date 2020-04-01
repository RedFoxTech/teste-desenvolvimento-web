import React,{Component} from "react"
import { Container, PanelGroup, Grid, Col, Pagination } from 'rsuite';
import HeaderHome from "../Header/index"
import Card from "../Card";
import { getPokemons, getQuantityOfPages } from "../../actions/index";
import { connect } from "react-redux";

const panel = {
    display: "flex",
    backgroundColor: "#2A2D34",
    borderRadius: 0,
    flexWrap: "wrap",
    justifyContent: "center"
}

const grid = {
    width: "100%"
}

class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            activePage: 1,
            inputValue: ""
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount(){
        const page = 1
        this.props.getPokemons(page)
        this.props.getQuantityOfPages()
    }

    handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        })
        this.props.getPokemons(eventKey)
    }

    render(){
        const allPokemons = this.props.pokemons

        return(
            <Container>
                <HeaderHome/>
                    <PanelGroup style={panel}>
                        <Grid style={grid} fluid>
                        {allPokemons.map((pokemon) => (
                            <Col xs={8} sm={8} md={8} key={pokemon.pokemonId} >
                                <Card 
                                    pokemonId={pokemon.pokemonId}
                                    image={pokemon.sprite}
                                    number={pokemon.pokedexNumber}
                                    name={pokemon.pokemonName}
                                    typeOne={pokemon.typeOne}
                                    typeTwo={pokemon.typeTwo}
                                />
                            </Col>
                        ))}
                        </Grid>
                        <Pagination
                            prev
                            last
                            next
                            first
                            pages={this.props.quantityOfPages} 
                            activePage={this.state.activePage}
                            onSelect={this.handleSelect}
                            maxButtons={10}
                            style={{margin: "25px"}}
                        />
                    </PanelGroup>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.allPokemons,
    quantityOfPages: state.pokemons.quantityOfPages
})

const mapDispatchToProps = dispatch => ({
    getPokemons: (page) => dispatch(getPokemons(page)),
    getQuantityOfPages: () => dispatch(getQuantityOfPages())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)