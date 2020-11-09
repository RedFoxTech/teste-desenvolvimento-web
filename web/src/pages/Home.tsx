import React, {useEffect, useState} from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import '../styles/pages/home.css'
import teste from '../images/pokemons.png'
import Sidebar from '../components/Sidebar'
import api from '../services/api'


//informando o tipo de objeto ou array
interface Item{
  pokedexNumber: number
  namePokemon: String
  image:{
    path: string
  }
  atk: number
  def: number
  type1: String
  type2: String
}

function Home(){
  
  const [pokemon, setPokemon] = useState<Item[]>([])
  
  useEffect(()=>{
      api.get('pokemon').then(response=>{
        setPokemon(response.data)
      })
  }, [])

    return(
        <div className="page-home">
           <Sidebar/>

            <div className="page-content">
            <Form.Control type="text" placeholder="Buscar pokemon" />
            
            {/* usando o map() para puxar todos os registros contidos na variavel pokemon*/}
            {pokemon.map(item=> (
               <Card className="cardPokemon" key={item.pokedexNumber} style={{ width: '18rem' }}>
               <Card.Img variant="top" src={teste} />
                <Card.Body>
                  <Card.Title>{item.namePokemon}</Card.Title>
                  <Card.Text>
                     <strong>ATK: </strong>{item.atk} <strong>DEF: </strong>{item.def}<br/>
                      <strong>Type 1: </strong>{item.type1} <strong>Type 2: </strong>{item.type2}
                  </Card.Text>
                <Button variant="warning">Detalhes</Button>
               </Card.Body>
              </Card>
            ))}
            </div>
        </div>
    )
}

export default Home