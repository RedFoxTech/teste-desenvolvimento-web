import { useContext, useState } from "react";
import Lottie from "react-lottie";
import { BiSearchAlt } from 'react-icons/bi'
import { PokemonApiContext, IPokemonProps } from "../contexts/pokemonApi";
import { Container, ResultContainer, SearchAreaContainer, WarningModal } from "../styles/pages/search";
import PikachuAnimation from "../images/pikachu-animation.json"
import PokemonItem from "../components/pokemonItem";

interface ISearchProps {
    history: {
        push: (path: string) => void
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



function Search(props: ISearchProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectValue, setSelectValue] = useState<string>('');
    const [listOfPokemonsSearched, setListOfPokemonsSearched] = useState<IPokemonProps[]>([]);
    const { searchPokemon } = useContext(PokemonApiContext);
    const [ showWarningModal, setShowWarningModal ] = useState<boolean>();

    function handleSearch() {
        
        if(inputValue === '' || selectValue === "Selecione" || selectValue === '') return setShowWarningModal(true);
        const pokemonsFounded = searchPokemon(inputValue, selectValue);
        setListOfPokemonsSearched(pokemonsFounded);
    }

    return (
        <Container>
            {showWarningModal && (
                <WarningModal>
                    <main>
                        <h1> Campo vazio! </h1>
                        <p> Por favor, indique o valor e a propiedade que procura.</p>
                        <button onClick={() => setShowWarningModal(false)}> Entendi</button>
                    </main>
                </WarningModal>
            )}
            
            <h1> Pesquisar</h1>
            <SearchAreaContainer>
                <button onClick={handleSearch}> Pesquisar <BiSearchAlt /> </button>
                <input type="text" placeholder="pesquise..." value={inputValue} onChange={event => setInputValue(event.target.value)} />

                <select onChange={(event) => setSelectValue(event.target.value)}>
                    <option> Selecione </option>

                    {selectValues.map(value => (
                        <option value={value} key={value}> {value} </option>
                    ))}
                </select>

            </SearchAreaContainer>

            <ResultContainer>
                {
                    listOfPokemonsSearched?.length !== 0 ?
                        listOfPokemonsSearched.map((pokemonObj) => (
                            <PokemonItem pokemonObj={pokemonObj} key={pokemonObj["Row"]} push={props.history.push}/>

                        ))
                        : (
                            <Lottie options={{
                                animationData: PikachuAnimation
                            }} style={{maxWidth: 340}}>

                            </Lottie>
                        )
                }
            </ResultContainer>
        </Container>
    );
}

export default Search;