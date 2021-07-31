import React from "react";

import * as types from "../../../../server/types";
import { Modal, ListGroup, Card, Row, Col } from "react-bootstrap";
import { getAbilities } from "../../services/pokemons";
import "./style.css"

interface IProps {
    pokemon: types.Pokemon;
    modalIsOpen: boolean;
    closeModal: () => void;
}

interface IState {
    abilities: types.PokemonAbility[];
}

export default class PokemonDetailsModal extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            abilities: [],
        }
    }

    componentDidMount = async () => {
        const abilities = await getAbilities(this.props.pokemon.PokedexNumber);

        this.setState({ abilities: abilities });
    }
    render() {
        return (
            <Modal show={this.props.modalIsOpen} onHide={() => this.props.closeModal()} size="lg">
                <Modal.Header closeButton closeLabel="">

                    <Modal.Title>{this.props.pokemon.Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <ListGroup >
                                <ListGroup.Item><strong>Name:</strong> {this.props.pokemon.Name}</ListGroup.Item>
                                <ListGroup.Item><strong>PokedexNumber:</strong> {this.props.pokemon.PokedexNumber}</ListGroup.Item>
                                <ListGroup.Item><strong>Type1:</strong> {this.props.pokemon.Type1}</ListGroup.Item>
                                <ListGroup.Item><strong>Type2:</strong> {this.props.pokemon.Type2}</ListGroup.Item>
                                <ListGroup.Item><strong>Weather1:</strong> {this.props.pokemon.Weather1}</ListGroup.Item>
                                <ListGroup.Item><strong>Weather2:</strong> {this.props.pokemon.Weather2}</ListGroup.Item>
                                <ListGroup.Item><strong>ImgName:</strong> {this.props.pokemon.ImgName}</ListGroup.Item>
                                <ListGroup.Item variant="success"><strong>ATK:</strong> {this.props.pokemon.ATK}</ListGroup.Item>
                                <ListGroup.Item variant="primary"><strong>DEF:</strong> {this.props.pokemon.DEF}</ListGroup.Item>
                                <ListGroup.Item variant="danger"><strong>STA:</strong> {this.props.pokemon.STA}</ListGroup.Item>
                                <ListGroup.Item><strong>Generation:</strong> {this.props.pokemon.Generation}</ListGroup.Item>
                                <ListGroup.Item><strong>EvolutionStage:</strong> {this.props.pokemon.EvolutionStage}</ListGroup.Item>
                                <ListGroup.Item><strong>Evolved:</strong> {this.props.pokemon.Evolved}</ListGroup.Item>
                                <ListGroup.Item><strong>FamilyID:</strong> {this.props.pokemon.FamilyID}</ListGroup.Item>
                                <ListGroup.Item><strong>CrossGen:</strong> {this.props.pokemon.CrossGen}</ListGroup.Item>
                                <ListGroup.Item><strong>StatTotal:</strong> {this.props.pokemon.StatTotal}</ListGroup.Item>
                                <ListGroup.Item><strong>Legendary:</strong> {this.props.pokemon.Legendary}</ListGroup.Item>
                                <ListGroup.Item><strong>Aquireable:</strong> {this.props.pokemon.Aquireable}</ListGroup.Item>
                                <ListGroup.Item><strong>Spawns:</strong> {this.props.pokemon.Spawns}</ListGroup.Item>
                                <ListGroup.Item><strong>Regional:</strong> {this.props.pokemon.Regional}</ListGroup.Item>
                                <ListGroup.Item><strong>Raidable:</strong> {this.props.pokemon.Raidable}</ListGroup.Item>
                                <ListGroup.Item><strong>Hatchable:</strong> {this.props.pokemon.Hatchable}</ListGroup.Item>
                                <ListGroup.Item><strong>Shiny:</strong> {this.props.pokemon.Shiny}</ListGroup.Item>
                                <ListGroup.Item><strong>Nest:</strong> {this.props.pokemon.Nest}</ListGroup.Item>
                                <ListGroup.Item><strong>New:</strong> {this.props.pokemon.New}</ListGroup.Item>
                                <ListGroup.Item><strong>NotGettable:</strong> {this.props.pokemon.NotGettable}</ListGroup.Item>
                                <ListGroup.Item><strong>FutureEvolve:</strong> {this.props.pokemon.FutureEvolve}</ListGroup.Item>
                                <ListGroup.Item><strong>CP40:</strong> {this.props.pokemon.CP40}</ListGroup.Item>
                                <ListGroup.Item><strong>CP39:</strong> {this.props.pokemon.CP39}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <Card.Header><strong>Abilities</strong></Card.Header>
                                <Card.Body>
                                    {this.state.abilities.map((ability) => {
                                        return (
                                            <>
                                                <Card.Title>{ability.Name}</Card.Title>
                                                <Card.Text>
                                                    {ability.Effect}
                                                </Card.Text>
                                            </>
                                        );
                                    })}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}