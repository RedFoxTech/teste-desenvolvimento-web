import { useContext, useState } from "react";
import { PokemonApiContext } from "../contexts/pokemonApi";
import { Container, ModalError } from "../styles/pages/addNewPokemon";

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