import React, { useEffect, useState } from 'react'
import api from '../services/api'
import PokeCard from '../components/PokeCard'
import Form from '../components/Form'
import { Card, CardColumns, Button } from 'react-bootstrap'


function MainContainer() {

  const [pokemon, setPokemon] = useState([{}]);
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    api.get('pokemon').then(response => {
      const pokemon = response.data
      setPokemon(pokemon)
    })
  }, []);

  function getBg(type) {
    let bg = ''
    switch (type) {
      case 'fire':
        bg = '#931'
        break
      case 'grass':
        bg = '#161'
        break
      case 'water':
        bg = '#138'
        break
    }
    return bg
  }

  function handleAdd() {
    setvisible(!visible)
    console.log(visible)
  }
  return (
    <>
      <Button onClick={handleAdd} style={{ margin: 10 }} variant="primary">{!visible ? "Adicionar Pokemon":"Esconder Form"}</Button>
     {visible &&  <Form />}
      <CardColumns>
        {
          pokemon.map(pokemon => {
            return (
              <PokeCard
                bg={getBg}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                atk={pokemon.atk}
                def={pokemon.def}
                sta={pokemon.sta}
              />
            )
          })
        }
      </CardColumns>
    </>
  )
}

export default MainContainer