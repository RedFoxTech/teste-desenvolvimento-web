import { useQuery } from "../services/hook"



interface GetPokemons {
    data : [
      {
        Name: string,
        PokedexNUmber: Number
      }
    ]
  }

export function BuscarAPI() {
  const { data, loading, refetch } = useQuery<GetPokemons>({ query: "pokemons" })
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