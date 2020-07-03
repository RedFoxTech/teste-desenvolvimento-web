import React, { useState } from 'react';
import Header from '../../components/header/index'
import PokemonCard from '../../components/cards/index.js'
import styled from 'styled-components'
import Data from '../../Pokemon-data.json';
import { useHistory } from 'react-router-dom'

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`

const PokeMainPage = (props) => {

  const [inputFilter, handleInput] = useState("");

  const history = useHistory()

  const handleChangePokemon = (item) => {
    props.changePokemon(item)
    history.push('/poke-details')
  }

  const handleInputChange = (event) => {
    handleInput(event.target.value)
  }

  const getFilteredList = () => {
    return Data.PokeData
      .filter((PokeData) => PokeData.Name.toLowerCase().includes(inputFilter.toLowerCase().trim()))
  }

  const filteredList = getFilteredList()

  return (

    <MainContainer>
      <Header value={inputFilter} handleInput={handleInputChange} />

      {
        filteredList.map((item) => {
          return (

            <PokemonCard
              key={item.Name}
              onClick={() => handleChangePokemon(item)}
              Pokename={item.Name}
              PokeType={item["Type 1"]}
              PokeType2={item["Type 2"]}
              PokeImg={item.Row} />

          )
        })
      }
    </MainContainer>
  );
}


export default PokeMainPage;
