import React, {useEffect, useState} from 'react';
import NavbarWeb from "../components/navbar";
import Footer from "../components/footer";
import PokeItem from "../components/pokemon-item";
import PokeInfo from "../components/pokemon-info";
import axios from "axios";

export default function Home (){
    const [Pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function loadPokemons() {
            const response = await axios.get("http://localhost:3333/list", {headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'}});
            setPokemons(response.data);
            console.log(response.data);
        }
        loadPokemons();
    }, []);

    return(
        <>
            <NavbarWeb/>
            <div class="container scrollable">
                {Pokemons.map(Pokemon => (
                    <PokeItem key={Pokemon._id}
                              name={Pokemon.name}
                              weather1={Pokemon.weather1}
                              weather2={Pokemon.weather2}
                              type1={Pokemon.type1}/>
                ))}
            </div>
            <div class="row mr-5">
                <div class='col-md ml-3'>

                </div>
                <div class='col-md ml-3 '>
                </div>
            </div>
        </>
    )
}