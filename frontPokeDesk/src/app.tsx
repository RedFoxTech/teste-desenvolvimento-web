import axios from "axios"
import {useEffect, useState} from 'react'



export function App() { 
  const [Dados, setDados] = useState<any>([])
  const [Mpoke, setMpoke] = useState<any>([])
  const [ValorDesejado, setValorDesejado] = useState<number>(0)
  const url = "https://pokeapi.co/api/v2/pokemon/?offset="+ {ValorDesejado} +"&limit=10"


  /*function naoNulo(): String{
    if(ValorDesejado > 0){
      return "https://pokeapi.co/api/v2/pokemon/?offset="+ {ValorDesejado} +"&limit=10"
    }
    "https://pokeapi.co/api/v2/pokemon/?offset=&limit=10"
  }*/
  useEffect(()=>{
    const urlLocal = "https://pokeapi.co/api/v2/pokemon/?offset=&limit=10"


    axios.get(urlLocal).then(res =>{
      const dados = res.data.results
      setDados(dados)
    })

    /*Dados.map(function(item: any){
      console.log(item.url)
      axios.get(item.url).then(res =>{
        const dados = res.data.results
        setMpoke(dados)
      })
    })*/

    //console.log(Mpoke)
  },[])

  return (  
    <ul>
      {Dados.map(function(item: any){
        return <li> {item.name}</li>
      })}
    </ul>
    
  )
}


