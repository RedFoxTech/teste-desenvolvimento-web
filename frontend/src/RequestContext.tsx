import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { api } from './services/axios'

interface RequestProviderData {
  children: ReactNode
}

interface RequestContext {
  loading: boolean;
  pokemons: Pokemon[];
  types: string[];
  value: string;
  infinite: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  setIndexPokemon: Dispatch<SetStateAction<number>>;
  indexPokemon: number
  pokemonAll: Pokemon[]
}

interface Pokemon {
  Name: string;
  Type1: string;
  Type2: string;
  EvolutionStage: string;
  Weather1: string;
  Weather2: string;
  Generation: number;
  Imgname: string;
  PokedexNumber: number;
  ATK: number;
  DEF: number;
  STA: number;
  STATTOTAL: number;
  Aquireable: number;
  CrossGen: number;
  Hatchable: number;
  Raidable: number;
  Regional: number;
  Shiny: number;
}
export const RequestContextData = createContext({} as RequestContext)

export function RequestProvider({ children }: RequestProviderData) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemonAll, setPokemonsAll] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState('All')
  const [types, setTypes] = useState([])
  const [indexPokemon, setIndexPokemon] = useState(5)
  const [infinite, setInfinite] = useState(false)
  

  useEffect(() => {
    setLoading(true)

    try {
      api.get('/pokemons').then(response => {
        const ResponseNoSpaces = JSON.parse(
          JSON.stringify(response.data[0]).replace(/\s(?=\w+":)/g, '')
        )
        setPokemonsAll(ResponseNoSpaces)

        // const TenFirstItems = ResponseNoSpaces.map((item, index) => index < indexPokemon ? item : false).filter(item => item == false ? false : true)

        if (value === 'All') {
          setPokemons(ResponseNoSpaces)
        } else {
          const onlyPokemonTypes = pokemonAll.filter(pokemon => {
            return pokemon.Type1 === value ? true : false
          })
          // const TenFirstItems:any = onlyPokemonTypes.map((item, index) => index <= indexPokemon ? item : false).filter(item => item == false ? false : true)
          setPokemons(onlyPokemonTypes)
        }

        const pokemonsTypes = ResponseNoSpaces.map(
          (item) => item.Type1
        ).filter(
          (item, index, array) =>
            array.indexOf(item) === index
        )
        setTypes(pokemonsTypes)


        setInfinite(!infinite)
      })
    } catch (e) {
      console.log(e.message)
    } finally {
      setTimeout(() => setLoading(false), 2000)
    }

  }, [indexPokemon, value])

  // console.log(pokemons)
  return (
    <RequestContextData.Provider
      value={{ loading, pokemonAll, pokemons, indexPokemon, types, setValue, value, setIndexPokemon, infinite}}
    >
      {children}
    </RequestContextData.Provider>
  )
}
