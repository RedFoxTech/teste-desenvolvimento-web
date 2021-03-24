import { useContext, useEffect, useState } from "react";
import PokemonItem from "../components/pokemonItem";
import { PokemonApiContext } from "../contexts/pokemonApi";
import { Container } from "../styles/pages/listOfPokemons";

interface IListOfPokemons {
    history: {
        push: (path: string) => void;

    }
}


const selectValues = [
    "100% CP @ 39",
    "100% CP @ 40",
    "ATK",
    "Aquireable",
    "Cross Gen",
    "DEF",
    "Evolution Stage",
    "Evolved",
    "FamilyID",
    "Future Evolve",
    "Generation",
    "Hatchable",
    "Img name",
    "Legendary",
    "Name",
    "Nest",
    'New',
    "Not-Gettable",
    "Pokedex Number",
    "Raidable",
    "Regional",
    "Row",
    'STA',
    "STAT TOTAL",
    "Shiny",
    "Spawns",
    "Type 1",
    "Type 2",
    "Weather 1",
    "Weather 2"
]

function ListOfPokemons(props: IListOfPokemons) {
    const { arrayOfPokemons, filterArrayOfPokemonsByProp } = useContext(PokemonApiContext);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [filterByProp, setFilterByProp] = useState<string>();
    const numberOfPokemonsByPage = 20;
    const totalPages = arrayOfPokemons ? Math.ceil(arrayOfPokemons.length / numberOfPokemonsByPage) : 0;

    useEffect(() => {

    }, [arrayOfPokemons, currentPage, filterByProp])


    function handleOnFilterElements() {
        if (!filterByProp) return;
        filterArrayOfPokemonsByProp(filterByProp);
        if (currentPage === 0) {
            setCurrentPage(1);
        } else {
            setCurrentPage(0);

        }

    }


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
                    }}>Anterior</button>

                {currentPage + 1} de {totalPages}

                <button
                    disabled={currentPage === totalPages - 1}
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                > Próximo</button>


                <select name="" id="" onChange={event => setFilterByProp(event.target.value)}>
                    <option value=""> Selecione </option>
                    {
                        selectValues.map(title => <option value={title} key={title}> {title} </option>)
                    }
                </select>
                <button onClick={handleOnFilterElements}>
                    Filtrar
                </button>
            </p>


            {
                renderElements()
            }
        </Container>
    )
}

export default ListOfPokemons;