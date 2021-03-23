import { useContext, useEffect, useState } from "react";
import { MdDoneAll } from 'react-icons/md';
import { IoTrashBinSharp } from 'react-icons/io5';
import { RiEdit2Fill } from 'react-icons/ri';
import Lottie from 'react-lottie';
import LoadingAnimation from "../images/loadingAnimation.json"

import { PokemonApiContext } from "../contexts/pokemonApi";
import { Container, ButtonsArea, InfosArea } from "../styles/pages/pokemonData";

interface IPokemonDataProps {
    history: {
        push: (path: string)  => void;
    };
    match: {
        params: {
            id: number
        }
    }
}

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


function PokemonData(props: IPokemonDataProps) {
    const { id } = props.match.params;
    const { arrayOfPokemons, updatePokemon, deletePokemon } = useContext(PokemonApiContext);
    const [pokemonObj, setPokemonObj] = useState<any>();
    const [showSaveButton, setShowSaveButton] = useState<boolean>();
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>();


    useEffect(getData, [arrayOfPokemons, id]);

    useEffect(() => {
    }, [pokemonObj, arrayOfPokemons])

    function getData() {
        arrayOfPokemons?.forEach(pokemon => {
            if (pokemon.Row === Number(id)) {
                setPokemonObj(pokemon);
            }
        });

    }

    function handleOnInputChange(value: string | number, objectProp: string) {

        setPokemonObj({
            ...pokemonObj,
            [objectProp]: value
        });
    }

    function handleOnUpdate() {
        updatePokemon(pokemonObj);
    }

    return (
        <Container>

            <h1> {pokemonObj?.Name} </h1>

            <p> {showSaveButton ? 'Modo edição ativado' : "Modo edição desativado"} </p>

            { pokemonObj && (

                <ButtonsArea>
                    {showSaveButton ? (
                        <>
                            <button className="cancel" onClick={() => setShowSaveButton(false)}>  Cancelar </button>
                            <button className="save" onClick={handleOnUpdate}> Salvar <MdDoneAll /> </button>
                        </>
                    ) : (
                        <>
                            <button className="delete"> Deletar <IoTrashBinSharp /> </button>
                            <button className="update" onClick={() => setShowSaveButton(true)}> Atualizar <RiEdit2Fill /> </button>
                        </>
                    )}
                </ButtonsArea>

            )}
            <InfosArea>
                {
                    pokemonObj ? Object.keys(pokemonObj).map(title => (
                        <label htmlFor={title} key={title}>
                            <span> {title} </span>
                            <input
                                type={titlesOfTypeNumber.includes(title) ? 'number' : 'text'}
                                value={pokemonObj[title]}
                                onChange={event => handleOnInputChange(event.target.value, title)}
                                readOnly={!showSaveButton}
                            />
                        </label>
                    ))
                        :
                        <div className="loading">
                            <Lottie options={{
                                animationData: LoadingAnimation
                            }} />
                        </div>
                }
            </InfosArea>



        </Container>
    )
}

export default PokemonData