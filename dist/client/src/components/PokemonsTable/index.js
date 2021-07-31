"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
class PokemonsTable extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, hover: true, size: "xs" },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "Row"),
                    react_1.default.createElement("th", null, "Name"),
                    react_1.default.createElement("th", null, "Type1"),
                    react_1.default.createElement("th", null, "Type2"))),
            react_1.default.createElement("tbody", null, this.props.pokemons.map((pokemon, i) => {
                if (pokemon)
                    return (react_1.default.createElement("tr", { className: "pokemonTableRow", onClick: () => this.props.openModal(pokemon), key: `tableRow-${i}` },
                        react_1.default.createElement("td", null, pokemon.Row),
                        react_1.default.createElement("td", null, pokemon.Name),
                        react_1.default.createElement("td", null, pokemon.Type1),
                        react_1.default.createElement("td", null, pokemon.Type2)));
            }))));
    }
}
exports.default = PokemonsTable;
