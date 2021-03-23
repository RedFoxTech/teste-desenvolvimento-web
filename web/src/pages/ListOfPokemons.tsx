import { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie";
import PokemonItem from "../components/pokemonItem";
import { PokemonApiContext } from "../contexts/pokemonApi";
import LoadingAnimation from "../images/loadingAnimation.json"
import { Container } from "../styles/pages/listOfPokemons";

interface IListOfPokemons {
    history: {
        push: (path: string) => void;
    }
}

function ListOfPokemons(props: IListOfPokemons) {
    const { arrayOfPokemons } = useContext(PokemonApiContext);
    const [minPositionAtArray, setMinPositionAtArray] = useState<number>(0);
    const [currentPokemons, setCurrentPokemons] = useState<[]>();

    useEffect(getElements, [minPositionAtArray, arrayOfPokemons])


    function getElements() {
        const listToShow = arrayOfPokemons?.filter((pokemon, index) => {
            return index >= minPositionAtArray && index <= minPositionAtArray + 35;
        });

        setCurrentPokemons(listToShow as any)
    }

    return (
        <Container>
            {currentPokemons && <h1> Lista de Pokemons </h1>}
            
            
            {currentPokemons && <p> {minPositionAtArray + 36} de {arrayOfPokemons?.length}</p> }

            

            {
                currentPokemons ?
                    currentPokemons.map((pokemonObj: any) => <PokemonItem pokemonObj={pokemonObj} push={props.history.push} key={pokemonObj.Row} />)
                    :
                    <Lottie options={{
                        animationData: LoadingAnimation
                    }} />
            }
        </Container>
    )
}

export default ListOfPokemons;