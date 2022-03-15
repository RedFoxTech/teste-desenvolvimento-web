import axios from "axios"
import {useEffect, useState} from 'react'



export function App() { 
  const [Dados, setDados] = useState<any>([])
  const [ValorDesejado, setValorDesejado] = useState<number>(10)

  function naoNulo(): string{
    if(ValorDesejado > 10){
      return `https://pokeapi.co/api/v2/pokemon?limit=${ValorDesejado}&offset=200`
    }
    return `https://pokeapi.co/api/v2/pokemon?limit=10&offset=200`
  }
  useEffect(()=>{

    axios.get(naoNulo()).then(res =>{
      const dados = res.data.results
      setDados(dados)
    })

  },[ValorDesejado])

  return (  
    <div>
      <h3>
          Lista de Pokemons Abaixo
      </h3>
      <button onClick={()=>{setValorDesejado((state)=>state +10)}}>Gerar mais 10 pokemons</button>
      <ul>
        {Dados.map(function(item: any){
          return <li> {item.name}</li>
        })}
      </ul>
    </div>
    
  )
}


