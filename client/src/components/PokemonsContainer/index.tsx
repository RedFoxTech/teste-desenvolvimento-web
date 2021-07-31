import React from "react";

import { getPokemons } from "../../services/pokemons"
import * as types from "../../../../server/types";
import { Col, Row, Table, Container, Modal, Pagination, Form, Dropdown, Figure } from "react-bootstrap";
import PokemonDetailsModal from "../PokemonDetailsModal";
import PokemonsTable from "../PokemonsTable";
import FiltersContainer from "../FiltersContainer";
import "./style.css"

interface IProps {
}

interface IState {
    pokemons: types.Pokemon[];
    pokemonsList: types.Pokemon[];
    selectedPokemon: types.Pokemon | null;
    modalIsOpen: boolean;
    pageOffset: number;
    rowsPerPage: number;
    numberOfPages: number;
    pagesArray: JSX.Element[];
    nameFilter: string;
}
export default class PokemonsContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
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
    async componentDidMount() {
        const pokemonsList = await getPokemons();

        var numberOfPages = Math.ceil(pokemonsList.length / this.state.rowsPerPage)

        this.setState({ pokemonsList: pokemonsList, numberOfPages: numberOfPages });

        this.setContent();
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false, selectedPokemon: null });
    }
    openModal = (pokemon: types.Pokemon) => {
        this.setState({ modalIsOpen: true, selectedPokemon: pokemon });
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
            pagesArray.push(
                <Pagination.Item
                    activeLabel=""
                    key={`page-${number}`}
                    active={number === this.state.pageOffset + 1}
                    onClick={() => this.changePage(currentPage)
                    }>
                    {number}
                </Pagination.Item>,
            );
        }

        this.setState({ pagesArray: pagesArray, pokemons: pokemons })
    }

    changePage = async (pageNumber: number) => {
        await this.setState({ pageOffset: pageNumber - 1 });
        this.setContent();
    }

    handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({ nameFilter: e.target.value })
    }

    getFiltredPokemons = async () => {
        const pokemonsList = await getPokemons(this.state.nameFilter);
        var numberOfPages = Math.ceil(pokemonsList.length / this.state.rowsPerPage)

        this.setState({ pokemonsList: pokemonsList, numberOfPages: numberOfPages, pageOffset: 0 });
        this.setContent();
    }

    handeRowsPerPage = (rowsPerPage: number) => {
        this.setState({ rowsPerPage: rowsPerPage });
        this.getFiltredPokemons();
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <h1>DIMAS - POKEDEX</h1>

                    <FiltersContainer
                        handleFilterChange={this.handleFilterChange}
                        nameFilter={this.state.nameFilter}
                        getFiltredPokemons={this.getFiltredPokemons}
                        rowsPerPage={this.state.rowsPerPage}
                        handeRowsPerPage={this.handeRowsPerPage}
                    />
                    <PokemonsTable
                        pokemons={this.state.pokemons}
                        openModal={this.openModal}
                    />
                    <Pagination size="sm">{this.state.pagesArray}</Pagination>
                    {this.state.selectedPokemon &&
                        <PokemonDetailsModal
                            pokemon={this.state.selectedPokemon}
                            modalIsOpen={this.state.modalIsOpen}
                            closeModal={() => this.closeModal()}
                        />
                    }
                </Container>
            </div>
        );
    }
}

