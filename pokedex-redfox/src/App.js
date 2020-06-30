import React from 'react';
import Header from './components/header/index.js'
import PokemonCard from './components/cards/index.js'
import styled from 'styled-components'
import {pokemons} from './Mock';
import Data from './Pokemon-data.json';

const MainContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`




function App() {

  console.log(pokemons[0]["Type 1"]);


  return (

    <MainContainer>

     <Header/>
      {
        
        Data.PokeData.map(function(item){


        return (
          <PokemonCard Pokename={item.Name} 
                       PokeType={item["Type 1"]}
                       PokeType2={item["Type 2"]}
                       PokeImg={item.Row} />
        )
        })
      }


     
     </MainContainer>




  );
}

export default App;
