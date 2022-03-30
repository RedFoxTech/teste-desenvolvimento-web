import { useQuery } from "../../services/hook"

interface GetPokemons {
  Name: string,
  Pokedex_Number: string,
  Type_1: string,
  Type_2: string,
  STAT_TOTAL: string,
  ATK: string,
  DEF: string,
  STA: string,
}

export function BuscarAPI() {
  const { data, loading, refetch } = useQuery<GetPokemons[]>({ query: "pokemons" }, 1)
  console.log(data)
  return (
    <div>
      <h3>
        Lista de Pokemons Abaixo
      </h3>
      <ul>
        {
          data && data.map((item) => (<li> {item.Name}</li>))
        }
      </ul>
    </div>

  )
}