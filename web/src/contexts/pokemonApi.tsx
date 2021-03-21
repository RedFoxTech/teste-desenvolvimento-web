import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IPokemonApiContext {
    isPokemonsLoaded: boolean;
    arrayOfPokemons: [];
}

interface IPokemonProvideProps{
    children: ReactNode;
}

const PokemonApiContext = createContext({} as IPokemonApiContext);



function PokemonApiProvider({ children }: IPokemonProvideProps) {
    const [ theresErrorWhileGettingData, setTheresErrorWhileGettingData ] = useState<boolean>(false);
    const [ isPokemonsLoaded, setIsPokemonsLoaded ] = useState<boolean>(false);
    const [ arrayOfPokemons, setArrayOfPokemons ] = useState<[]>([]);


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
    
    return (
        <PokemonApiContext.Provider value={{
            isPokemonsLoaded,
            arrayOfPokemons
        }}>

            {children}
            
        </PokemonApiContext.Provider>
    )
}

export { 
    PokemonApiContext,
    PokemonApiProvider
}