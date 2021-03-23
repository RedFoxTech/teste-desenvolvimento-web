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
    const { arrayOfPokemons, filterArrayOfPokemonsByProp } = useContext(PokemonApiContext);
    const [minPositionAtArray, setMinPositionAtArray] = useState<number>(0);
    const [currentPokemons, setCurrentPokemons] = useState<[]>();

    useEffect(getElements, [minPositionAtArray, arrayOfPokemons])


    function getElements() {
        filterArrayOfPokemonsByProp("Name");
        const listToShow = arrayOfPokemons?.filter((pokemon, index) => {
            return index >= minPositionAtArray && index <= minPositionAtArray + 35;
        });

        setCurrentPokemons(listToShow as any);
    }

    return (
        <Container>
            {currentPokemons && <h1> Lista de Pokemons </h1>}


            {currentPokemons &&
                <p>
                    <button
                        disabled={minPositionAtArray === 0}
                        onClick={() => setMinPositionAtArray(minPositionAtArray - 35)}
                    >
                        Anterior
                    </button>

                    {minPositionAtArray + 36} de {arrayOfPokemons?.length}
                    <button
                        disabled={arrayOfPokemons ? ( minPositionAtArray >=  arrayOfPokemons.length) : true }
                        onClick={() => setMinPositionAtArray(minPositionAtArray + 35)}
                    >
                        Próxima
                    </button>
                </p>
            }



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