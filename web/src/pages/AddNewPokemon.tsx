import { useContext, useState } from "react";
import { PokemonApiContext } from "../contexts/pokemonApi";
import { Container, ModalError } from "../styles/pages/addNewPokemon";

interface IPokemonProps {
    "100% CP @ 39": number | undefined;
    "100% CP @ 40": number | undefined;
    ATK: number | undefined;
    Aquireable: 1 | 0 | undefined;
    "Cross Gen": 1 | 0 | undefined;
    DEF: number | undefined;
    "Evolution Stage": number | undefined;
    Evolved: 0 | 1 | undefined;
    FamilyID: number | undefined;
    "Future Evolve": 0 | 1 | undefined;
    Generation: number | undefined;
    Hatchable: number | undefined;
    "Img name": number | undefined;
    Legendary: 0 | 1 | undefined;
    Name: string | undefined;
    Nest: 0 | 1 | undefined;
    New: 1 | 0 | undefined;
    "Not-Gettable": 0 | 1 | undefined;
    "Pokedex Number": number | undefined;
    Raidable: 0 | 1 | undefined;
    Regional: 0 | 1 | undefined;
    Row: number | undefined;
    STA: number | undefined;
    "STAT TOTAL": number | undefined;
    Shiny: 0 | 1 | undefined;
    Spawns: 0 | 1 | undefined;
    "Type 1": string | undefined;
    "Type 2": string | undefined;
    "Weather 1": string | undefined;
    "Weather 2": string | undefined;
}

const fieldsValues = [
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
];


const titlesOfTypeNumber = [
    "100% CP @ 39",
    "100% CP @ 40",
    "ATK",
    "DEF",
    "Evolution Stage",
    "FamilyID",
    "Generation",
    "Hatchable",
    "Img name",
    "Pokedex Number",
    "Row",
    "STA",
    "STAT TOTAL",
    "Aquireable",
    "Cross Gen",
    "Evolved",
    "Future Evolve",
    "Legendary",
    "Nest",
    "New",
    "Not-Gettable",
    "Raidable",
    "Regional",
    "Shiny",
    "Spawns"
]



// const [pokemonToCreate, setPokemonToCreate] = useState<IPokemonProps | any>({
//     "100% CP @ 39": undefined,
//     "100% CP @ 40": undefined,
//     "Cross Gen": undefined,
//     "Evolution Stage": undefined,
//     "Future Evolve": undefined,
//     "Img name": undefined,
//     "Not-Gettable": undefined,
//     "Pokedex Number": undefined,
//     "STAT TOTAL": undefined,
//     "Type 1": undefined,
//     "Type 2": undefined,
//     "Weather 1": undefined,
//     "Weather 2": undefined,
//     ATK: undefined,
//     Aquireable: undefined,
//     DEF: undefined,
//     Evolved: undefined,
//     FamilyID: undefined,
//     Generation: undefined,
//     Hatchable: undefined,
//     Legendary: undefined,
//     Name: undefined,
//     Nest: undefined,
//     New: undefined,
//     Raidable: undefined,
//     Regional: undefined,
//     Row: undefined,
//     STA: undefined,
//     Shiny: undefined,
//     Spawns: undefined

// });

function AddNewPokemon() {
    const { newPokemon } = useContext(PokemonApiContext);
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
    let pokemonInfos: any = {};


    function handleInputChange(value: string, prop: string) {
        pokemonInfos = {
            ...pokemonInfos,
            [prop]: value
        }
    }

    function handleCreatePokemon(event: any) {
        event.preventDefault();
        const arrayOfKeys = Object.keys(pokemonInfos);
        if (arrayOfKeys.length < fieldsValues.length) return setShowErrorModal(true);

        newPokemon(pokemonInfos)

    }

    return (
        <Container>
            <h1> Adicionar novo pokémon </h1>

            {showErrorModal && (
                <ModalError>
                    <main>

                        <h1>Erro!</h1>
                        <p> Por favor preencha todos os campos corretamente. </p>

                        <button onClick={() => setShowErrorModal(false)}> Entendi</button>
                    </main>
                </ModalError>
            )}

            <form>



                {
                    fieldsValues.map(title =>
                        <label key={title} htmlFor={title}>
                            <span>
                                {title}
                            </span>
                            <input
                                id={title}
                                type={titlesOfTypeNumber.includes(title) ? "number" : "text"}
                                value={pokemonInfos[title]}
                                onChange={event => handleInputChange(event.target.value, title)}
                                required
                            />
                        </label>
                    )
                }

                <button onClick={event => handleCreatePokemon(event)} type="submit"> Criar pokémon</button>
            </form>
        </Container>

    );

}


export default AddNewPokemon;