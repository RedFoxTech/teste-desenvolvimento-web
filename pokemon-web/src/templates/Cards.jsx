import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import Modal from "./Modal";
import ModalUpdate from "./ModalUpdate";

const URL = "http://localhost:3030/pokemons";

export default props => {
    useEffect(() => {
        refresh();
    }, []);

    const [list, setList] = useState([]);
    const [pokemonAtual, setPokemonAtual] = useState({});

    const refresh = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setList(data);
    };

    const onDelete = async id => {
        await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        refresh();
    };

    const updatePokemonAtual = pokemon => {
        setPokemonAtual(pokemon);
        console.log(pokemonAtual);
    };
    return (
        <React.Fragment>
            <Modal refresh={refresh} />
            <ModalUpdate pokemonAtual={pokemonAtual} refresh={refresh} />
            <CardList
                list={list}
                onDelete={onDelete}
                pokemonAtual={pokemonAtual}
                updatePokemonAtual={updatePokemonAtual}
            />
        </React.Fragment>
    );
};
