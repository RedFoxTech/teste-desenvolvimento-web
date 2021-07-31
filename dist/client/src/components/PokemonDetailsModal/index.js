"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const pokemons_1 = require("../../services/pokemons");
require("./style.css");
class PokemonDetailsModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => __awaiter(this, void 0, void 0, function* () {
            const abilities = yield pokemons_1.getAbilities(this.props.pokemon.PokedexNumber);
            this.setState({ abilities: abilities });
        });
        this.state = {
            abilities: [],
        };
    }
    render() {
        return (react_1.default.createElement(react_bootstrap_1.Modal, { show: this.props.modalIsOpen, onHide: () => this.props.closeModal(), size: "lg" },
            react_1.default.createElement(react_bootstrap_1.Modal.Header, { closeButton: true, closeLabel: "" },
                react_1.default.createElement(react_bootstrap_1.Modal.Title, null, this.props.pokemon.Name)),
            react_1.default.createElement(react_bootstrap_1.Modal.Body, null,
                react_1.default.createElement(react_bootstrap_1.Row, null,
                    react_1.default.createElement(react_bootstrap_1.Col, { sm: 8 },
                        react_1.default.createElement(react_bootstrap_1.ListGroup, null,
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Name - ",
                                this.props.pokemon.Name),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "PokedexNumber - ",
                                this.props.pokemon.PokedexNumber),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "ImgName - ",
                                this.props.pokemon.ImgName),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Generation - ",
                                this.props.pokemon.Generation),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "EvolutionStage - ",
                                this.props.pokemon.EvolutionStage),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Evolved - ",
                                this.props.pokemon.Evolved),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "FamilyID - ",
                                this.props.pokemon.FamilyID),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "CrossGen - ",
                                this.props.pokemon.CrossGen),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Type1 - ",
                                this.props.pokemon.Type1),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Type2 - ",
                                this.props.pokemon.Type2),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Weather1 - ",
                                this.props.pokemon.Weather1),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Weather2 - ",
                                this.props.pokemon.Weather2),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "StatTotal - ",
                                this.props.pokemon.StatTotal),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, { variant: "success" },
                                "ATK - ",
                                this.props.pokemon.ATK),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, { variant: "primary" },
                                "DEF - ",
                                this.props.pokemon.DEF),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, { variant: "danger" },
                                "STA - ",
                                this.props.pokemon.STA),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Legendary - ",
                                this.props.pokemon.Legendary),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Aquireable - ",
                                this.props.pokemon.Aquireable),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Spawns - ",
                                this.props.pokemon.Spawns),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Regional - ",
                                this.props.pokemon.Regional),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Raidable - ",
                                this.props.pokemon.Raidable),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Hatchable - ",
                                this.props.pokemon.Hatchable),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Shiny - ",
                                this.props.pokemon.Shiny),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "Nest - ",
                                this.props.pokemon.Nest),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "New - ",
                                this.props.pokemon.New),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "NotGettable - ",
                                this.props.pokemon.NotGettable),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "FutureEvolve - ",
                                this.props.pokemon.FutureEvolve),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "CP40 - ",
                                this.props.pokemon.CP40),
                            react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null,
                                "CP39 - ",
                                this.props.pokemon.CP39))),
                    react_1.default.createElement(react_bootstrap_1.Col, { sm: 4 },
                        react_1.default.createElement(react_bootstrap_1.Card, null,
                            react_1.default.createElement(react_bootstrap_1.Card.Header, null, "Abilities"),
                            react_1.default.createElement(react_bootstrap_1.Card.Body, null, this.state.abilities.map((ability) => {
                                return (react_1.default.createElement(react_1.default.Fragment, null,
                                    react_1.default.createElement(react_bootstrap_1.Card.Title, null, ability.Name),
                                    react_1.default.createElement(react_bootstrap_1.Card.Text, null, ability.Effect)));
                            }))))))));
    }
}
exports.default = PokemonDetailsModal;
