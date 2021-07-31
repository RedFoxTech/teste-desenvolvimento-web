import React from "react";

import { Table } from "react-bootstrap";
import * as types from "../../../../server/types";

interface IProps {
    pokemons: types.Pokemon[];
    openModal: (pokemon: types.Pokemon) => void;
}

export default class PokemonsTable extends React.Component<IProps> {
    render() {
        return (
            <Table striped bordered hover size="xs" >
                <thead>
                    <tr>
                        <th>Row</th>
                        <th>Name</th>
                        <th>Type1</th>
                        <th>Type2</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.pokemons.map((pokemon, i) => {
                        if (pokemon)
                            return (
                                <tr className="pokemonTableRow" onClick={() => this.props.openModal(pokemon)} key={`tableRow-${i}`}>
                                    <td>{pokemon.Row}</td>
                                    <td>{pokemon.Name}</td>
                                    <td>{pokemon.Type1}</td>
                                    <td>{pokemon.Type2}</td>
                                </tr>
                            );
                    })}
                </tbody>
            </Table>
        );
    }
}