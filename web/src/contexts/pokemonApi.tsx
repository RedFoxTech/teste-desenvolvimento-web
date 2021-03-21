import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IPokemonApiContext {
    isPokemonsLoaded: boolean;
    arrayOfPokemons: [] | undefined;
    theresErrorWhileGettingData: boolean;
    getPokemonById: (id: number) => void;
    pokemonSearchedById: {} | undefined
}

interface IPokemonProvideProps{
    children: ReactNode;
}

const PokemonApiContext = createContext({} as IPokemonApiContext);



function PokemonApiProvider({ children }: IPokemonProvideProps) {
    const [ theresErrorWhileGettingData, setTheresErrorWhileGettingData ] = useState<boolean>(false);
    const [ isPokemonsLoaded, setIsPokemonsLoaded ] = useState<boolean>(false);
    const [ arrayOfPokemons, setArrayOfPokemons ] = useState<[]>();
    const [ pokemonSearchedById, setPokemonSearchedById ] = useState<{}>();


    useEffect(() => {
        getData();
    }, []);

    async function getData(){

        await axios.get('http://localhost:3030/getPokemons').then( resp => { 
            setIsPokemonsLoaded(true);
            setArrayOfPokemons(resp.data);
        }).catch( err => {
            setTheresErrorWhileGettingData(true);
        });
    }

    
    async function getPokemonById(id: number){
        await axios.get(`http://localhost:3030/getPokemon/${id}`).then( resp => { 
            setPokemonSearchedById(resp.data);
        });
    }

    
    return (
        <PokemonApiContext.Provider value={{
            isPokemonsLoaded,
            arrayOfPokemons,
            theresErrorWhileGettingData,
            pokemonSearchedById,
            getPokemonById
        }}>

            {children}
            
        </PokemonApiContext.Provider>
    )
}

export { 
    PokemonApiContext,
    PokemonApiProvider
}