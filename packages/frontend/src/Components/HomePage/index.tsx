import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PokemonCard from "../PokemonCard";

import  {pokemonContainer} from '@styles/Components/homePage.module.scss'

class HomePage extends React.PureComponent<null, null> {

    render(): React.ReactNode {
        console.log("HomePage render");
        return (
            <main className={classNames(["container", "bg-light", pokemonContainer])} >
                <PokemonCard imgSrc="noImg" pokemon={{
                        row: 31337,
                        name: 'Bulbassaurão',
                        pokedexId: 31337,
                        imageName: 'Bulbassaurão',
                        generation: 'Bulbassaurão',
                        evolutionState: 'Bulbassaurão',
                        evolved: true,
                        familyId: 31337,
                        crossGeneration: true,
                        type1: 'grass',
                        type2: 'poison',
                        weather1: 'Sunny/clear',
                        weather2: 'Sunny/clear',
                        statsSum: 31337,
                        attack: 31337,
                        defense: 31337,
                        staminaHP: 31337,
                        legendary: true,
                        acquirable: true,
                        spawns: true,
                        regional: true,
                        raidable: 31337,
                        hatchable: 31337,
                        shiny: true,
                        nest: true,
                        isNewPokemon: true,
                        notGettable: true,
                        futureEvolve: true,
                        fullCPLevel40: 31337,
                        fullCPLevel39: 31337,
                }} />
            </main>
        );
    }
}

export default HomePage;
