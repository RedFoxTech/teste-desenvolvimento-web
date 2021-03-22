import { Container, SearchAreaContainer } from "../styles/pages/search";

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
    return (
        <Container>
            <h1> Pesquisar</h1>
            <SearchAreaContainer>
                <input type="text" placeholder="pesquise..."/>
                <select>
                    {selectValues.map( value => (
                        <option value={value}> {value} </option>
                    ))}
                </select>
            </SearchAreaContainer>
        </Container>
    );
}

export default Search;