import React, { useContext, useEffect } from 'react'
import { Sidebar } from './components/SideBar'
import { Card } from './components/Card'
import { RequestContextData } from './RequestContext'
import { Loading } from './components/Loading'


function App() {
  const { loading, pokemons, types} =
    useContext(RequestContextData)


  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center w-full h-screen">
  //       <Loading />
  //     </div>
  //   )
  // }

  return (
    <div className="flex">
      <Sidebar types={types} />

      <div className="flex-auto ">
        {pokemons.map((pokemon) => (
          <>
            <Card
              loading={loading}
              Aquireable={pokemon.Aquireable}
              CrossGen={pokemon.CrossGen}
              Hatchable={pokemon.Hatchable}
              Raidable={pokemon.Raidable}
              Regional={pokemon.Regional}
              Shiny={pokemon.Shiny}
              key={pokemon.Name}
              ATK={pokemon.ATK}
              DEF={pokemon.DEF}
              STA={pokemon.STA}
              STATTOTAL={pokemon.STATTOTAL}
              PokedexNumber={pokemon.PokedexNumber}
              Name={pokemon.Name}
              Imgname={pokemon.Imgname}
              Type1={pokemon.Type1}
              Type2={pokemon.Type2}
              EvolutionStage={pokemon.EvolutionStage}
              Weather1={pokemon.Weather1}
              Weather2={pokemon.Weather2}
              Generation={pokemon.Generation}
            />
          </>
        ))}
      </div>
    </div>
  )
}

export default App
