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
const pokemons_1 = require("../../services/pokemons");
const react_bootstrap_1 = require("react-bootstrap");
const PokemonDetailsModal_1 = __importDefault(require("../PokemonDetailsModal"));
const PokemonsTable_1 = __importDefault(require("../PokemonsTable"));
const FiltersContainer_1 = __importDefault(require("../FiltersContainer"));
require("./style.css");
class PokemonsContainer extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.closeModal = () => {
            this.setState({ modalIsOpen: false, selectedPokemon: null });
        };
        this.openModal = (pokemon) => {
            this.setState({ modalIsOpen: true, selectedPokemon: pokemon });
        };
        this.changePage = (pageNumber) => __awaiter(this, void 0, void 0, function* () {
            yield this.setState({ pageOffset: pageNumber - 1 });
            this.setContent();
        });
        this.handleFilterChange = (e) => {
            this.setState({ nameFilter: e.target.value });
        };
        this.getFiltredPokemons = () => __awaiter(this, void 0, void 0, function* () {
            const pokemonsList = yield pokemons_1.getPokemons(this.state.nameFilter);
            var numberOfPages = Math.ceil(pokemonsList.length / this.state.rowsPerPage);
            this.setState({ pokemonsList: pokemonsList, numberOfPages: numberOfPages, pageOffset: 0 });
            this.setContent();
        });
        this.handeRowsPerPage = (rowsPerPage) => {
            this.setState({ rowsPerPage: rowsPerPage });
            this.getFiltredPokemons();
        };
        this.state = {
            pokemons: [],
            pokemonsList: [],
            selectedPokemon: null,
            modalIsOpen: false,
            pageOffset: 0,
            rowsPerPage: 20,
            numberOfPages: 0,
            pagesArray: [],
            nameFilter: "",
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonsList = yield pokemons_1.getPokemons();
            var numberOfPages = Math.ceil(pokemonsList.length / this.state.rowsPerPage);
            this.setState({ pokemonsList: pokemonsList, numberOfPages: numberOfPages });
            this.setContent();
        });
    }
    setContent() {
        var currentOffset = this.state.pageOffset * this.state.rowsPerPage;
        var pokemons = [];
        for (var i = 0; i < this.state.rowsPerPage; i++) {
            pokemons.push(this.state.pokemonsList[currentOffset++]);
        }
        var pagesArray = [];
        for (var number = 1; number <= this.state.numberOfPages; number++) {
            const currentPage = number;
            pagesArray.push(react_1.default.createElement(react_bootstrap_1.Pagination.Item, { activeLabel: "", key: `page-${number}`, active: number === this.state.pageOffset + 1, onClick: () => this.changePage(currentPage) }, number));
        }
        this.setState({ pagesArray: pagesArray, pokemons: pokemons });
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(react_bootstrap_1.Container, { fluid: true },
                react_1.default.createElement("h1", null, "POKEDEX"),
                react_1.default.createElement(FiltersContainer_1.default, { handleFilterChange: this.handleFilterChange, nameFilter: this.state.nameFilter, getFiltredPokemons: this.getFiltredPokemons, rowsPerPage: this.state.rowsPerPage, handeRowsPerPage: this.handeRowsPerPage }),
                react_1.default.createElement(PokemonsTable_1.default, { pokemons: this.state.pokemons, openModal: this.openModal }),
                react_1.default.createElement(react_bootstrap_1.Pagination, { size: "sm" }, this.state.pagesArray),
                this.state.selectedPokemon &&
                    react_1.default.createElement(PokemonDetailsModal_1.default, { pokemon: this.state.selectedPokemon, modalIsOpen: this.state.modalIsOpen, closeModal: () => this.closeModal() }))));
    }
}
exports.default = PokemonsContainer;
