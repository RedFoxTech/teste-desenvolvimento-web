import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PokemonCard from "../PokemonCard";

import { pokemonContainer } from '@styles/Components/homePage.module.scss'
import PokemonType from "../../../../shared/declarations/enums/PokemonType";
import PokemonWeather from "../../../../shared/declarations/enums/Weather";
import Pokemon from "../../../../shared/declarations/interfaces/Pokemon";
import { ApiFactory } from "@src/Services/ApiWithCache";

class HomePage extends React.PureComponent<null, { pokemons: Pokemon[] }> {
    constructor(props: null) {
        super(props);
        this.state = {
            pokemons: []
        };
    }

    private async fetchAllPokemons(): Promise<Pokemon[]> {
        /** API com chave de cache */
        const { api } = ApiFactory("/Pokemon/getAll");
        const response = await api.get("/Pokemon/getAll");
        console.log(response);
        return response.data;
    }

    componentDidMount(): void {
        this.fetchAllPokemons().then(pokemons => {
            this.setState({ pokemons })
        }).catch(error => {
            console.log(error)
        });
    }

    private suspensePokemons(): React.ReactNode[] {
        const pokemons: React.ReactNode[] = [];
        for (let i = 0; i <= 9; i++) {
            pokemons.push(
                <PokemonCard key={i} pokemon={{
                    row:-1, name:'Carregando...', pokedexId:-1, imageName: 'invalid', generation:'Carregando...', type1: PokemonType.NORMAL, weather1: PokemonWeather.SUNNY, type2: PokemonType.NORMAL, weather2: PokemonWeather.SUNNY, staminaHP: -1, attack: -1, defense: -1, evolutionState: 'Carregando...', evolved: false, crossGeneration: false, statsSum: -1, legendary: false, acquirable: false, spawns: false, regional: false, raidable: -1, hatchable: -1, shiny: false, nest: false, isNewPokemon: false, notGettable: true, fullCPLevel39: -1, fullCPLevel40: -1, futureEvolve: false,
                    }}
                    imgSrc="Assets/fa-pokemon-arena.svg"
                />
            );
        }
        return pokemons;
    }

    render(): React.ReactNode {
        console.log("HomePage render");

        const { pokemons = null } = this.state;

        return (
            <main className={classNames(["container", "bg-light", pokemonContainer])} >
                    {pokemons
                        ? pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon._id} />)
                        : this.suspensePokemons()
                    }

            </main>
        );
    }
}

export default HomePage;
