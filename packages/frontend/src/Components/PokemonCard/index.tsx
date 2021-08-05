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
    pokemonInfoTitle,
    pokemonStatsTable,
    attackText,
    defenseText,
    hpText,
} from '@styles/Components/pokemonCard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faSkull } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
import Pokemon from "../../../../shared/declarations/interfaces/Pokemon";

/** Pequena função utilizada para manter o princípio DRY */
const dataPresentation = (dataKey: string, dataValue: unknown) => (
    <ListGroupItem className={pokemonAttribute}>
        <span className={pokemonStat}>
            <b>{dataKey}</b>
            <p>{typeof dataValue === 'string'? dataValue: String(dataValue)}</p>
        </span>
    </ListGroupItem>
);
/** Pequena função utilizada para manter o princípio DRY */
const question = (_question: string, answer: boolean) => (
    dataPresentation(_question, answer ? "Sim" : "Não")
);

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
                        <ListGroup className={classNames(["list-group-flush"])} id="pokemonInfo">
                            <ListGroupItem className={pokemonAttribute} style={{padding: '0'}}>
                                {/* table responsiva do bootstrap */}
                                <table className={classNames(["table", "table-responsive", pokemonStatsTable])}>
                                    <thead>
                                        <tr>
                                            <th colSpan={1} className={attackText}>
                                                <FontAwesomeIcon icon={faSkull} /> {' '} Ataque
                                            </th>
                                            <th colSpan={2}  className={defenseText}>
                                                <FontAwesomeIcon icon={faShieldAlt} /> {' '} Defesa 
                                            </th>
                                            <th colSpan={3}  className={hpText}>
                                                <FontAwesomeIcon icon={faLifeRing} /> {' '} Max HP
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={1}> {pokemon.attack} </td>
                                            <td colSpan={2}> {pokemon.defense} </td>
                                            <td colSpan={3}> {pokemon.staminaHP} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                    <Collapse in={!collapsed}>
                        <div>
                            <h4 className={pokemonInfoTitle}> Informações: </h4>
                            {/* Informações de Pokémon usando DRY (Don't repeat yourself) */}
                            <ListGroup className={classNames(["list-group-flush", pokemonAttributesList])} id="pokemonInfo">
                                {dataPresentation("Nº Pokedéx:", pokemon.pokedexId)}
                                {dataPresentation("Geração:", pokemon.generation)}
                                {dataPresentation("Estado de evolução:", pokemon.evolutionState)}
                                {question("Evoluído?", pokemon.evolved)}
                                {dataPresentation("Nº da família:", pokemon.familyId)}
                                {question("Cruza gerações?", pokemon.evolved)}
                                {dataPresentation("Tipo primário:", pokemon.type1)}
                                {dataPresentation("Tipo secundário:", pokemon.type2)}
                                {dataPresentation("Clima primário", pokemon.weather1)}
                                {dataPresentation("Clima secundário", pokemon.weather2)}
                                {dataPresentation("Stats Total:", pokemon.statsSum)}
                                {question("Lendário?", pokemon.legendary)}
                                {question("Adiquirível", pokemon.acquirable)}
                                {question("Surge randomicamente?", pokemon.spawns)}
                                {question("Regional?", pokemon.regional)}
                                {question("É chefão?", (pokemon.raidable > 0))}
                                {
                                    (pokemon.raidable > 0)
                                        ? dataPresentation("Nível do chefão:", pokemon.raidable)
                                        : null
                                }
                                {/* Não me pergunte como eu descobri que hatchable era o número
                                    de passos para chocar vezes mil*/}
                                {
                                    (pokemon.hatchable > 0)
                                        ? dataPresentation("Passos para chocar", `${pokemon.hatchable} mil`)
                                        : null
                                }
                                {question("Pode ser brilhante?", pokemon.shiny)}
                                {question("Anda em bando?", pokemon.nest)}
                                {question("Geração recente?", pokemon.isNewPokemon)}
                                {question("Capturável?", !pokemon.notGettable)}
                                {question("Pode evoluir?", pokemon.futureEvolve)}
                                {dataPresentation("CP no nível 40", pokemon.fullCPLevel40)}
                                {dataPresentation("CP no nível 39", pokemon.fullCPLevel39)}
                            </ListGroup>
                        </div>
                    </Collapse>
                    <Card.Body>
                        <div className="d-grid gap-2">
                            <Button
                              variant="secondary"
                              size="lg"
                              type="button"
                              aria-aria-controls="pokemonInfo"
                              aria-expanded={!collapsed}
                              // eslint-disable-next-line @typescript-eslint/no-unused-vars
                              onClick={(_evy) => this.setState({collapsed: !collapsed})}
                            >
                                {collapsed? 'Mais': 'Menos'} informações...
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
        );
    }
}

export default PokemonCard;
