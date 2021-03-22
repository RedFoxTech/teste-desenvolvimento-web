import { useContext, useState } from "react";
import Lottie from "react-lottie";
import { PokemonApiContext, IPokemonProps } from "../contexts/pokemonApi";
import { Container, ResultContainer, SearchAreaContainer } from "../styles/pages/search";
import PikachuAnimation from "../images/pikachu-animation.json" 

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

function Search() {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectValue, setSelectValue] = useState<string>('');
    const [listOfPokemonsSearched, setListOfPokemonsSearched] = useState<IPokemonProps[]>([]);
    const { searchPokemon } = useContext(PokemonApiContext);

    function handleOnChange(value: string){
        if(value === '') return setListOfPokemonsSearched([]);
        setInputValue(value);
        const pokemonsFounded = searchPokemon(inputValue, selectValue);
        setListOfPokemonsSearched(pokemonsFounded)
    }

    return (
        <Container>
            <h1> Pesquisar</h1>
            <SearchAreaContainer>
                <input type="text" placeholder="pesquise..." onChange={event => handleOnChange(event.target.value)}/>
                <select onChange={(event) => setSelectValue(event.target.value)  }>
                    {selectValues.map( value => (
                        <option value={value} key={value}> {value} </option>
                    ))}
                </select>
            </SearchAreaContainer>

            <ResultContainer>
                {
                    listOfPokemonsSearched?.length !== 0 ? null : (
                        <Lottie options={{
                            animationData: PikachuAnimation
                        }}>

                        </Lottie>
                    )
                }
            </ResultContainer>
        </Container>
    );
}

export default Search;