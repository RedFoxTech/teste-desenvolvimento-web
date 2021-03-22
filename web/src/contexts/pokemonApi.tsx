import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IPokemonProps {
    "100% CP @ 39": number;
    "100% CP @ 40": number;
    ATK: number;
    Aquireable: 1 | 0;
    "Cross Gen": 1 | 0;
    DEF: number;
    "Evolution Stage": number;
    Evolved: 0 | 1;
    FamilyID: number;
    "Future Evolve": 0 | 1;
    Generation: number;
    Hatchable: number;
    "Img name": number;
    Legendary: 0 | 1;
    Name: string;
    Nest: 0 | 1;
    New: 1 | 0;
    "Not-Gettable": 0 | 1;
    "Pokedex Number": number;
    Raidable: 0 | 1;
    Regional: 0 | 1;
    Row: number;
    STA: number;
    "STAT TOTAL": number;
    Shiny: 0 | 1;
    Spawns: 0 | 1;
    "Type 1": string;
    "Type 2": string;
    "Weather 1": string;
    "Weather 2": string;
}

interface IPokemonApiContext {
    isPokemonsLoaded: boolean;
    arrayOfPokemons: IPokemonProps[] | undefined;
    theresErrorWhileGettingData: boolean;
    pokemonSearchedById: {} | undefined
    getPokemonById: (id: number) => void;
    searchPokemon: (value: string, filter: string) => IPokemonProps[];
    updatePokemon: (pockemonObj: IPokemonProps) => void;
    deletePokemon: (id: number) => void
}

interface IPokemonProvideProps {
    children: ReactNode;
}


const PokemonApiContext = createContext({} as IPokemonApiContext);



function PokemonApiProvider({ children }: IPokemonProvideProps) {
    const [theresErrorWhileGettingData, setTheresErrorWhileGettingData] = useState<boolean>(false);
    const [isPokemonsLoaded, setIsPokemonsLoaded] = useState<boolean>(false);
    const [arrayOfPokemons, setArrayOfPokemons] = useState<IPokemonProps[]>();
    const [pokemonSearchedById, setPokemonSearchedById] = useState<{}>();


    useEffect(() => {
        getData();
    }, []);

    async function getData() {

        await axios.get('http://localhost:3030/getPokemons').then(resp => {
            setIsPokemonsLoaded(true);
            setArrayOfPokemons(resp.data);
        }).catch(err => {
            setTheresErrorWhileGettingData(true);
        });
    }

    async function getPokemonById(id: number) {
        await axios.get(`http://localhost:3030/getPokemon/${id}`).then(resp => {
            setPokemonSearchedById(resp.data);
        });
    }

    function searchPokemon(value: string, filter: string) {
        const pokemonsFounded: IPokemonProps[] = [];

        arrayOfPokemons?.forEach((pokemon: any) => {
            const filterValue = pokemon[filter].toString().toLowerCase();
            const valueToSearch = value.toLowerCase();

            if (filterValue?.includes(valueToSearch)) {
                pokemonsFounded.push(pokemon)
            }

        });

        return pokemonsFounded;
    }

    async function updatePokemon(pokemonObj: any) {
        await axios.post(`http://localhost:3030/updatePokemon/${pokemonObj.Row}`, {
            ...pokemonObj
        }).then( () => {

            getData();
            
        });
    }

    async function deletePokemon(id: number) {
        await axios.delete(`http://localhost:3030/deletePokemon/${id}`).then( () => {
            getData()
        })
    }

    return (
        <PokemonApiContext.Provider value={{
            isPokemonsLoaded,
            arrayOfPokemons,
            theresErrorWhileGettingData,
            pokemonSearchedById,
            getPokemonById,
            searchPokemon,
            updatePokemon,
            deletePokemon
        }}>

            {children}

        </PokemonApiContext.Provider>
    )
}

export {
    PokemonApiContext,
    PokemonApiProvider
}