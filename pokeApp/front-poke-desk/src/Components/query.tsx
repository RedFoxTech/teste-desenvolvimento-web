import { useQuery } from "../services/hook"

interface GetPokemons {
    count: number
    next: string;
    previous: string;
  
    results: {
      name: string;
      url: string;
    }[]
  }

export function BuscaApi() {
  const { data, loading, refetch } = useQuery<GetPokemons>({ query: "pokemon?limit=100&offset=200" })
  console.log(data)
  return (
    <div>
      <h3>
        Lista de Pokemons Abaixo
      </h3>
      <ul>
        {
          data && data.results.map((item) => (<li> {item.name}</li>))
        }
      </ul>
    </div>

  )
}