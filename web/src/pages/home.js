import React, {useEffect, useState} from 'react';
import NavbarWeb from "../components/navbar";
import Footer from "../components/footer";
import PokeItem from "../components/pokemon-item";
import PokeInfo from "../components/pokemon-info";
import axios from "axios";

export default function Home (){
    const [Pokemons, setPokemons] = useState([]);
    const [InfoVisibility, setInfoVisibility] = useState(false);
    const [InfoPokemon, setInfoPokemon] = useState(false);

    useEffect(() => {
        async function loadPokemons() {
            const response = await axios.get("http://localhost:3333/list");
            setPokemons(response.data);
        }
        loadPokemons();
    }, []);

    function setInfo(data){
        setInfoVisibility(true);
        setInfoPokemon(data);
    }

    return(
        <>
            <NavbarWeb/>
            <div class="row mr-5">
                <div class='col-md mt-4 ml-3 overflow-auto scroll'>
                    {Pokemons.filter((Pokemon) => {
                        if(window.Nome == "" || window.Nome == undefined){
                            return Pokemon;
                        } else if (Pokemon.name.toLowerCase().includes(window.Nome.toLowerCase())) {
                            return Pokemon;
                        }
                    }).map(Pokemon => (
                        <button
                            className={'button-info'}
                            key={Pokemon._id}
                            onClick={() => setInfo(Pokemon)}>
                        <PokeItem
                            name={Pokemon.name}
                            type1={Pokemon.type1}
                            type2={Pokemon.type2}
                            weather1={Pokemon.weather1}
                            weather2={Pokemon.weather2}
                        >
                        </PokeItem>
                        </button>
                    ))}
                </div>
                <div class='col-md ml-3 '>
                    {!!InfoPokemon &&
                    <PokeInfo
                        id={InfoPokemon._id}
                        name={InfoPokemon.name}
                        pokedexNumber={InfoPokemon.pokedexNumber}
                        regional={InfoPokemon.regional}
                        raidable={InfoPokemon.raidable}
                        hatchable={InfoPokemon.hatchable}
                        shiny={InfoPokemon.shiny}
                        nest={InfoPokemon.nest}
                        getable={InfoPokemon.notGettable}
                        type1={InfoPokemon.type1}
                        type2={InfoPokemon.type2}
                        weather1={InfoPokemon.weather1}
                        weather2={InfoPokemon.weather2}
                        atk={InfoPokemon.atk}
                        def={InfoPokemon.def}
                        sta={InfoPokemon.sta}
                        IV40={InfoPokemon.IV40}
                        IV39={InfoPokemon.IV39}
                        />
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}