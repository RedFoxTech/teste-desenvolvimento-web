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
    // dataValue pode ser mostrado se for 0, mas qualquer outro valor
    // falseável não será mostrado
    dataValue || (dataValue === 0)
        ? <ListGroupItem className={pokemonAttribute}>
          <span className={pokemonStat}>
              <b>{dataKey}</b>
              <p>{typeof dataValue === 'string'? dataValue: String(dataValue)}</p>
          </span>
        </ListGroupItem>
        : null
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

    componentDidMount(): void {
        const {
            imgImport = false,
            imgSrc = '',
            importSpritesPromise,
        } = this.props;

        if (imgImport) {
            if (this.props.imgSrc && typeof this.props.imgSrc === 'string') {
                // Enquanto a promise não resolve, mantém a imagem de suspensão
                this.setState({imgSrc: ''});

                // Importa a imagem de maneira assíncrona
                importSpritesPromise?.then((imageSrcMapping) => {
                    const _imgSrc = imageSrcMapping.default[imgSrc];
                    this.setState({imgSrc: _imgSrc});
                    // console.log('imagem importada', _imgSrc, Object.keys(imageSrcMapping.default)[0], imgSrc);
                }).catch((error) => {
                    console.error(error);
                });
            }
        }
    }

    render(): React.ReactNode {
        const {pokemon, imgImport, description} = this.props;
        const {collapsed} = this.state;
        /** Caso imgImport tenha sido passado para o componente, pega a
         * propriedade do state, que vai ser setada assim que a imagem
         * for carregada, ou então pega apenas a URL passada aqui
         */
        const {imgSrc = ''} = imgImport ? this.state : this.props;

        return (
                <Card
                  className={pokemonCard}
                  style={
                      // Fazemos isso para não empurrar a linha toda
                      // embaixo do card expandido, mas apenas empurrar
                      // o card abaixo do expandido. Isso fica sujeito
                      // a mudança dependendo do tamanho final do card,
                      // por enquanto o card expandido é aproximadamente
                      // 3 vezes maior que o collapsed
                      collapsed? {gridRow: 'span 1'}: {gridRow: 'span 3'}
                  }
                >
                    <Card.Title className={pokemonCardTitle}>
                        <img src="/Assets/fa-pokeball.svg" height={20} width={20} style={{verticalAlign: 'sub'}} alt="Pokéball" />
                        {pokemon.name || 'Pokémon Desconhecido'}
                    </Card.Title>
                    <div className={pokemonCardImage}>
                        {/* <img src="imagenotfound.gif" alt="Image not found" onerror="this.onerror=null;this.src='imagefound.gif';" /> */}
                        <Card.Img
                            style={{width: '95%', height: '95%'}}
                            variant="top"
                            src={imgSrc || 'Assets/fa-pokemon-arena.svg'}
                            alt="Pokémon"
                            onError={(_evt) => {
                                // Remove a propriedade onError da imagem para previnir recursão caso
                                // a imagem de fallback dê erro ao carregar
                                _evt.target.removeAttribute('onerror');
                                _evt.target.src = 'Assets/fa-pokemon-arena.svg';
                            }}
                        />
                    </div>
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
                                            <td colSpan={1}>
                                                {pokemon.attack > 0
                                                ? pokemon.attack
                                                : 'Carregando...'
                                            }
                                            </td>
                                            <td colSpan={2}>
                                                {pokemon.defense > 0
                                                ? pokemon.defense
                                                : 'Carregando...'
                                            }
                                            </td>
                                            <td colSpan={3}>
                                                {pokemon.staminaHP > 0
                                                ? pokemon.staminaHP
                                                : 'Carregando...'
                                            }
                                            </td>
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
                              aria-controls="pokemonInfo"
                              aria-expanded={!collapsed}
                              // eslint-disable-next-line @typescript-eslint/no-unused-vars
                              onClick={(_evt) => this.setState({collapsed: !collapsed})}
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
