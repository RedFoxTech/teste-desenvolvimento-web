import React from "react";
import { Button, Card, Collapse, ListGroup, ListGroupItem } from "react-bootstrap";
import classNames from "classnames";
import PokemonCardProps from "@src/Declarations/Interfaces/PokemonCardProps";
import { PokemonCardState } from "@src/Declarations/Types/PokemonCardState";
import {
    pokemonCard,
    pokemonCardTitle,
    pokemonCardImage,
    pokemonAttributesList,
    pokemonAttribute,
    pokemonStat,
} from '@styles/Components/pokemonCard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faSkull } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

class PokemonCard extends React.PureComponent<PokemonCardProps, PokemonCardState> {
    constructor(props: PokemonCardProps) {
        super(props);
        this.state = {
            collapsed: true,
        }
    }

    render(): React.ReactNode {
        const {pokemon, imgSrc, description} = this.props;
        const {collapsed} = this.state;

        return (
                <Card className={pokemonCard}>
                    <Card.Title className={pokemonCardTitle}>
                        <img src="/Assets/fa-pokeball.svg" height={20} width={20} style={{verticalAlign: 'sub'}} />
                        {pokemon.name || 'Pokémon Desconhecido'}
                    </Card.Title>
                    <Card.Img className={pokemonCardImage} variant="top" src={imgSrc} />
                    <Card.Body>
                        <Card.Text>
                            {description || 'Sua descrição é um mistério'}
                        </Card.Text>
                    </Card.Body>
                    <Collapse in={!collapsed}>
                        <ListGroup className={classNames(["list-group-flush", pokemonAttributesList])} id="pokemonInfo">
                            <ListGroupItem className={pokemonAttribute}>
                                {/* table responsiva do bootstrap */}
                                <table className="table table-responsive" style={{textAlign: 'center'}}>
                                    <thead>
                                        <tr>
                                            {/* font awesome duotone sword */}
                                            <th><FontAwesomeIcon icon={faSkull} /> {' '} Ataque</th>
                                            <th><FontAwesomeIcon icon={faShieldAlt} /> {' '} Defesa </th>
                                            <th><FontAwesomeIcon icon={faLifeRing} /> {' '} Max HP </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {pokemon.attack} </td>
                                            <td> {pokemon.defense} </td>
                                            <td> {pokemon.staminaHP} </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span className={pokemonStat}> <b>Ataque:</b> <p>{pokemon.attack}</p> </span>
                                <span className={pokemonStat}> <b>Defesa:</b> <p>{pokemon.defense}</p> </span>
                                <span className={pokemonStat}> <b>Vida:</b> <p>{pokemon.staminaHP}</p> </span>
                            </ListGroupItem>
                            <ListGroupItem className={pokemonAttribute}>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem className={pokemonAttribute}>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Collapse>
                    <Card.Body>
                        <div className="d-grid gap-2">
                            <Button
                              variant="secondary"
                              size="lg"
                              type="button"
                              aria-aria-controls="pokemonInfo"
                              aria-expanded={!collapsed}
                              onClick={(_ev) => this.setState({collapsed: !collapsed})}
                            >
                                Mais informações...
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
        );
    }
}

export default PokemonCard;
