import React from 'react';
import NavbarWeb from "../components/navbar";
import PokeItem from "../components/pokemon-item";
import PokeInfo from "../components/pokemon-info";

export default function Home (){
    return(
        <>
            <NavbarWeb/>
            <PokeItem/>
            <PokeInfo/>
        </>
    )
}