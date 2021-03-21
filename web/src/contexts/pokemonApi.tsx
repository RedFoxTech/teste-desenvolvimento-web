import { createContext, ReactNode, useEffect } from 'react';

interface IPokemonProvideProps{
    children: ReactNode;
}

const PokemonApiContext = createContext({});



function PokemonApiProvider({ children }: IPokemonProvideProps) {



    useEffect(() => {
        getData()
    })

    function getData(){

    }
    
    return (
        <PokemonApiContext.Provider value={{}}>

            {children}
            
        </PokemonApiContext.Provider>
    )
}

export { 
    PokemonApiContext,
    PokemonApiProvider
}