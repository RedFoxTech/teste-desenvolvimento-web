import React, { Component } from "react"
import { Panel, Grid, Row, Col, Button, Icon, Modal } from 'rsuite';
import { connect } from "react-redux"
import { getPokemonById } from "../../actions/index"

const cardStyle = {
    display: 'flex',
    width: 300,
    margin: 25,
    backgroundColor: "#FFF"
}

const image = {
    width: 100,
    justifyAlign: "center"
}

const textNumber = {
    width: "100%",
}

const textName = {
    width: "100%"
}

const type = {
    width: "50%"
}

const buttonView = {
    marginLeft: "58px"
}

class Card extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
    }

    close() {
        this.setState({ show: false });
    }

    open = async() => {
        await this.props.getPokemonById(this.props.pokemonId)
        this.setState({ show: true });
    }

    render(){  
        return (
            <>
                <Panel shaded bordered bodyFill style={cardStyle} key={this.props.pokemonId}>
                    <Grid fluid>
                        <Row>
                            <Col xs={8} sm={8} md={8} >
                                <img alt="pokemon" style={image} src={this.props.image}/>
                            </Col>
                            <Col xs={8} sm={8} md={8}>
                            <Grid fluid>
                                    <Row>
                                        <Col xs={24} sm={24} md={24}>
                                            <h6 style={textNumber}>Nº{this.props.number}</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={24} md={24}>
                                            <h5 style={textName}>{this.props.name}</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={type} xs={12} sm={12} md={12}>
                                            <h6>{this.props.typeOne}</h6>
                                        </Col>
                                        <Col style={type} xs={12} sm={12} md={12}>
                                            <h6>{this.props.typeTwo}</h6>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Col>
                            <Col xs={8} sm={8} md={8}>
                                <Button style={buttonView} color="blue" onClick={this.open}>
                                    <Icon icon="eye"/>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
                <Modal show={this.state.show} onHide={this.close}>
                <Modal.Header>
                    <Modal.Title>{this.props.pokemon.pokemonName} - Nº{this.props.pokemon.pokedexNumber} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img alt="pokemon" src={this.props.pokemon.sprite}/>
                    <p>Generation: {this.props.pokemon.generation}</p>
                    <p>Family Id: {this.props.pokemon.familyId}</p>
                    <p>Type: {this.props.pokemon.typeOne} | {this.props.pokemon.typeTwo}</p>
                    <p>Weather: {this.props.pokemon.weatherOne} | {this.props.pokemon.weatherTwo}</p>
                    <p>Attack: {this.props.pokemon.attack} | Defense: {this.props.pokemon.defense} | Stamina: {this.props.pokemon.stamina}</p>
                    <p>LVL 40 Max CP: {this.props.pokemon.maxCombatPowerLVL40} | LVL 39 Max CP: {this.props.pokemon.maxCombatPowerLVL39}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close} appearance="primary">
                        Fechar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemons.pokemon
})

const mapDispatchToProps = dispatch => ({
    getPokemonById: (number) => dispatch(getPokemonById(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)