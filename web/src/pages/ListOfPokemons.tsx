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

    const [currentPage, setCurrentPage] = useState(0);

    const [indexStartCount, setIndexStartCount] = useState<number>(0);
    const numberOfPokemonsByPage = 20;
    const totalPages = arrayOfPokemons ? Math.ceil(arrayOfPokemons.length / numberOfPokemonsByPage) : 0;

    useEffect(() => {

    }, [indexStartCount, arrayOfPokemons, currentPage])



    const renderElements = () => {
        const ret = [];
        const initialItem = currentPage * numberOfPokemonsByPage;
        for (let i = initialItem; i <= initialItem + numberOfPokemonsByPage; i++) {
            const pokemonObj = arrayOfPokemons && arrayOfPokemons[i];
            if (pokemonObj) {
                ret.push(<PokemonItem pokemonObj={pokemonObj} push={props.history.push} key={i} />);
            }
        }
        return ret;
    }

    return (
        <Container>
            <h1> Lista de Pokemons </h1>


            <p>
                <button
                    disabled={currentPage === 0}
                    onClick={() => {
                        setCurrentPage(currentPage - 1);
                    }}>anterior</button>

                    { currentPage + 1 } de { totalPages }
                    
                <button
                    disabled={currentPage === totalPages - 1}
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}>proximo</button>
            </p>


            {
                renderElements()
            }


            {/* {
                currentPokemons?.map((pokemonObj: any) => <PokemonItem pokemonObj={pokemonObj} push={props.history.push} key={pokemonObj.Row} />)

            } */}
        </Container>
    )
}

export default ListOfPokemons;