import React from 'react';
import Header from '../../components/header/index'
import PokemonCard from '../../components/cards/index.js'
import styled from 'styled-components'
import Data from '../../Pokemon-data.json';
import {useHistory} from 'react-router-dom'

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`




const PokeMainPage = (props) => {

    const history = useHistory()

const handleChangePokemon = (item) => {
  props.changePokemon(item)
  history.push('/poke-details')
}

 
    return (

      <MainContainer>
        <Header />

        {
          Data.PokeData.map((item) => {
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
