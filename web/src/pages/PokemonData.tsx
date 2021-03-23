import { useContext, useEffect, useState } from "react";
import { MdDoneAll } from 'react-icons/md';
import { IoTrashBinSharp } from 'react-icons/io5';
import { RiEdit2Fill } from 'react-icons/ri';
import Lottie from 'react-lottie';
import LoadingAnimation from "../images/loadingAnimation.json"

import { PokemonApiContext } from "../contexts/pokemonApi";
import { Container, ButtonsArea, InfosArea } from "../styles/pages/pokemonData";

interface IPokemonDataProps {
    match: {
        params: {
            id: number
        }
    }
}

function PokemonData(props: IPokemonDataProps) {
    const { id } = props.match.params;
    const { arrayOfPokemons } = useContext(PokemonApiContext);
    const [pokemonObj, setPokemonObj] = useState<any>();
    const [showSaveButton, setShowSaveButton] = useState<boolean>();

    useEffect(getData, [getData])

    function getData() {
        arrayOfPokemons?.forEach(pokemon => {
            if (pokemon.Row === Number(id)) {
                setPokemonObj(pokemon);
            }
        });

    }


    function handleOnInputChange(value: string, objectProp: string) {
        console.log(pokemonObj[objectProp]);
    }

    return (
        <Container>
            <h1> {pokemonObj?.Name} </h1>
            <ButtonsArea>
                <button className="update"> Atualizar <RiEdit2Fill /> </button>
                {showSaveButton ? (
                    <button className="save"> Salvar <MdDoneAll /> </button>
                ) : (
                    <button className="delete"> Deletar <IoTrashBinSharp /> </button>
                )}
            </ButtonsArea>

            <InfosArea>
                {
                    pokemonObj ? Object.keys(pokemonObj).map(title => (
                        <label htmlFor={title} key={title}>
                            <span> {title} </span>
                            <input type="text" value={pokemonObj[title]} onChange={event => handleOnInputChange(event.target.value, title)} />
                        </label>
                    ))
                        :
                        <div className="loading">
                            <Lottie options={{
                                animationData: LoadingAnimation
                            }}/>
                        </div>
                }
            </InfosArea>



        </Container>
    )
}

export default PokemonData